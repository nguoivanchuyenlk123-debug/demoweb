const chatWidget = document.createElement("section");
chatWidget.className = "chat-widget";
chatWidget.setAttribute("aria-label", "Trợ lý Cơm nhà");
chatWidget.innerHTML = `
  <button class="chat-toggle" type="button" aria-expanded="false" aria-controls="chat-panel">
    <span aria-hidden="true">✳</span> Hỏi Cơm nhà
  </button>
  <div class="chat-panel" id="chat-panel" hidden>
    <div class="chat-header">
      <div><p class="eyebrow light">TRỢ LÝ CƠM NHÀ</p><h2>Hôm nay ăn gì?</h2></div>
      <button class="chat-close" type="button" aria-label="Đóng trợ lý">×</button>
    </div>
    <div class="chat-messages" role="log" aria-live="polite"></div>
    <form class="chat-form">
      <label class="visually-hidden" for="chat-input">Câu hỏi cho trợ lý</label>
      <input id="chat-input" type="text" maxlength="1000" autocomplete="off" placeholder="Hỏi về món ăn, chi nhánh..." required>
      <button type="submit">Gửi <span aria-hidden="true">↗</span></button>
    </form>
  </div>
`;
document.body.append(chatWidget);

const chatToggle = chatWidget.querySelector(".chat-toggle");
const chatPanel = chatWidget.querySelector(".chat-panel");
const chatClose = chatWidget.querySelector(".chat-close");
const chatMessages = chatWidget.querySelector(".chat-messages");
const chatForm = chatWidget.querySelector(".chat-form");
const chatInput = chatWidget.querySelector("#chat-input");
const chatSubmit = chatForm.querySelector("button");
const chatHistory = [];

function addChatMessage(role, text) {
  const message = document.createElement("p");
  message.className = `chat-message chat-message-${role}`;
  message.textContent = text;
  chatMessages.append(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return message;
}

function setChatOpen(isOpen) {
  chatPanel.hidden = !isOpen;
  chatToggle.setAttribute("aria-expanded", String(isOpen));
  chatToggle.hidden = isOpen;
  if (isOpen) {
    chatInput.focus();
  } else {
    chatToggle.focus();
  }
}

addChatMessage("model", "Chào bạn! Mình có thể gợi ý món, báo giá hoặc chỉ đường tới chi nhánh Cơm nhà gần bạn.");

chatToggle.addEventListener("click", () => setChatOpen(true));
chatClose.addEventListener("click", () => setChatOpen(false));
chatWidget.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !chatPanel.hidden) {
    setChatOpen(false);
  }
});

chatForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const text = chatInput.value.trim();
  if (!text) return;

  addChatMessage("user", text);
  chatHistory.push({ role: "user", text });
  chatInput.value = "";
  chatSubmit.disabled = true;
  const pending = addChatMessage("model", "Đang suy nghĩ...");
  pending.classList.add("is-pending");

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: chatHistory })
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.reply) {
      throw new Error(data.error || "Trợ lý chưa trả lời được, bạn thử lại sau nhé.");
    }

    pending.textContent = data.reply;
    chatHistory.push({ role: "model", text: data.reply });
  } catch (error) {
    pending.textContent = error.message;
    pending.classList.add("is-error");
    chatHistory.pop();
  } finally {
    pending.classList.remove("is-pending");
    chatSubmit.disabled = false;
    chatInput.focus();
  }
});
