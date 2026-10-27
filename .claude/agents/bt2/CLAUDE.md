# Hướng dẫn dự án Cơm nhà

## 1. Mục tiêu

- Duy trì website responsive giới thiệu nhà hàng Cơm nhà và thực đơn món Việt.
- Giao diện, nội dung và hướng dẫn sử dụng trong website phải dùng tiếng Việt.

## 2. Công nghệ

- Website là HTML, CSS và JavaScript thuần; không dùng React, Vite hay framework khác.
- Không thêm thư viện, dependency hoặc công cụ build nếu chưa được yêu cầu.
- `npm run dev` khởi chạy máy chủ tĩnh từ `dev-server.js`.

## 3. Cấu trúc dự án

- `index.html`, `search.html`, `detail.html` là ba trang chính; `gioi-thieu.html` là trang giới thiệu.
- `styles.css` chứa giao diện dùng chung; `script.js`, `search.js`, `detail.js` xử lý tương tác theo trang.
- `.claude/` chứa cấu hình Claude Code, agents, commands, skills và settings của dự án.
- `docs/` chứa tài liệu hướng dẫn và tài nguyên minh họa.
- README giải thích từng thư mục trong cây dự án.

## 4. Quy ước chỉnh sửa

- Đọc các trang, script, stylesheet và tài liệu liên quan trước khi sửa.
- Thay đổi thẻ món phải đồng bộ giữa `index.html`, `search.html` và dữ liệu món trong `detail.js`.
- Giữ nguyên các tham số tìm kiếm `q` và `category`, các liên kết nội bộ và trạng thái truy cập.
- Ưu tiên tái sử dụng `styles.css`; giữ HTML ngữ nghĩa, bàn phím truy cập được và bố cục mobile.

## 5. Điều cấm

- Không đưa mật khẩu, token, API key hoặc nội dung `.env` vào mã nguồn, tài liệu hay phản hồi.
- Không tự ý xóa, ghi đè hoặc di chuyển dữ liệu và tệp người dùng.
- Không chạy lệnh phá hủy dữ liệu, triển khai hoặc xuất bản khi chưa được người dùng xác nhận.
- Không tự bịa thông tin nghiệp vụ, giá, hình ảnh hoặc nội dung liên hệ.

## 6. An toàn lệnh

- Trước khi chạy lệnh, giải thích mục đích và kiểm tra ảnh hưởng tới tệp, dữ liệu, dịch vụ bên ngoài.
- Các nhóm lệnh xóa tệp và thay đổi từ xa/xuất bản được cấu hình yêu cầu xác nhận trong `.claude/settings.json`.
- Không vô hiệu hóa hoặc né tránh bước hỏi quyền; nếu một lệnh có tác dụng phụ không rõ, dừng và hỏi người dùng.

## 7. Kiểm tra và khởi động

- Chạy `npm run dev` để khởi động website; mở `http://127.0.0.1:5173` để kiểm tra.
- Kiểm tra đúng trang và tương tác bị ảnh hưởng, liên kết nội bộ, desktop và mobile.
- Dự án chưa cấu hình bộ test hoặc build; không tuyên bố đã chạy chúng nếu chưa có.
- Báo rõ lệnh đã chạy, kết quả quan sát được và phần nào chưa thể kiểm chứng.
