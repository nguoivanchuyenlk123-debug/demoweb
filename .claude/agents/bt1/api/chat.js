// Thử lần lượt; model bị quá tải (429/5xx) hoặc chậm quá thời gian chờ sẽ chuyển sang model kế tiếp.
const GEMINI_MODELS = ["gemini-3.5-flash", "gemini-flash-lite-latest", "gemini-3.1-flash-lite"];
const GEMINI_TIMEOUT_MS = 20000;
const MAX_MESSAGES = 12;
const MAX_TEXT_LENGTH = 1000;

const systemPrompt = `Bạn là trợ lý tư vấn của nhà hàng Cơm nhà — "Vị ngon ba miền". Trả lời bằng tiếng Việt, thân thiện, ngắn gọn (tối đa khoảng 120 chữ), không dùng định dạng markdown phức tạp.

Chỉ dùng thông tin dưới đây. Nếu khách hỏi điều không có trong thông tin (khuyến mãi, thành phần chi tiết, giao hàng...), hãy nói rõ là bạn chưa có thông tin và mời khách gọi 1900 234 550. Không bịa món, giá hay chính sách.

Thực đơn:
- Cơm đùi gà nướng — 99.000đ — Miền Nam, món chính. Đùi gà nướng thơm mềm ăn cùng cơm nóng.
- Gỏi rau củ đậu hũ — 85.000đ — Ba miền, món khai vị. Rau củ tươi giòn kết hợp đậu hũ, thanh mát.
- Mì gà quay nước — 109.000đ — Miền Nam, món nước. Mì nóng với gà quay và nước dùng ngọt thanh.
- Cơm chiên hải sản — 199.000đ — Miền Nam, cơm nhà. Cơm chiên nóng hổi cùng hải sản.
- Bánh canh tôm càng — 95.000đ — Miền Trung, món nước. Bánh canh nóng, vị ngọt tươi.
- Trà đào cam chanh — 35.000đ — Miền Nam, thức uống. Trà trái cây vị đào, cam, chanh.

Chi nhánh (TP. Hồ Chí Minh):
- Quận 10: Tầng 5, Vạn Hạnh Mall, 11 Sư Vạn Hạnh — 028 3862 5588
- Quận 7: Tầng 5, Crescent Mall, 101 Tôn Dật Tiên — 028 2242 1100
- TP. Thủ Đức: Tầng 5, Vincom Mega Mall, 159–161 Võ Nguyên Giáp — 028 2241 6655

Giờ phục vụ: mỗi ngày 10:30 – 20:30. Đặt bàn: gọi 1900 234 550.`;

function toGeminiContents(messages) {
  return messages.slice(-MAX_MESSAGES).map((message) => ({
    role: message.role === "model" ? "model" : "user",
    parts: [{ text: String(message.text).slice(0, MAX_TEXT_LENGTH) }]
  }));
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Chỉ hỗ trợ phương thức POST." });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Máy chủ chưa được cấu hình Gemini." });
  }

  const messages = Array.isArray(req.body?.messages) ? req.body.messages : [];
  const validMessages = messages.filter((message) => message && typeof message.text === "string" && message.text.trim());
  if (!validMessages.length || validMessages[validMessages.length - 1].role === "model") {
    return res.status(400).json({ error: "Vui lòng nhập câu hỏi." });
  }

  const requestBody = JSON.stringify({
    systemInstruction: { parts: [{ text: systemPrompt }] },
    contents: toGeminiContents(validMessages),
    generationConfig: { temperature: 0.6, maxOutputTokens: 2048 }
  });

  for (const model of GEMINI_MODELS) {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
        body: requestBody,
        signal: AbortSignal.timeout(GEMINI_TIMEOUT_MS)
      });

      const data = await response.json();
      if (!response.ok) {
        console.error("Gemini error", model, response.status, data?.error?.message);
        continue;
      }

      const reply = data.candidates?.[0]?.content?.parts?.map((part) => part.text || "").join("").trim();
      if (!reply) {
        return res.status(502).json({ error: "Trợ lý chưa trả lời được câu này, bạn hỏi cách khác nhé." });
      }

      return res.status(200).json({ reply });
    } catch (error) {
      console.error("Gemini request failed", model, error.name, error.message);
    }
  }

  return res.status(503).json({ error: "Trợ lý đang bận, bạn thử lại sau nhé." });
};
