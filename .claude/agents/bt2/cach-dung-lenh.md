# Cách dùng bốn công cụ Claude

Các công cụ dưới đây nằm trong `.claude/` của dự án và được chia sẻ cùng mã nguồn. Dùng Claude Code trong thư mục gốc dự án để gọi lệnh hoặc để agent tự nạp skill.

## Hai lệnh gọi thủ công

### `/soat-ba-trang`

Rà soát `index.html`, `search.html`, `detail.html` và mã liên quan để tìm lỗi nhất quán, điều hướng, tìm kiếm, bộ lọc, truy cập và trạng thái rỗng. Lệnh chỉ đọc, không sửa tệp.

Ví dụ: `/soat-ba-trang`

### `/them-tin`

Thêm tin hoặc thông báo do bạn cung cấp vào vị trí được chỉ định. Nếu thiếu trang đích hoặc nội dung cần thiết, lệnh sẽ hỏi lại thay vì tự tạo dữ liệu. Nếu yêu cầu là thêm món ăn, dùng `/add-dish` đã có sẵn.

Ví dụ: `/them-tin Thêm thông báo nghỉ lễ vào trang chủ; nội dung: ...`

## Skill tự nạp

### `them-trang`

Khi yêu cầu tạo trang HTML mới, Claude có thể tự dùng quy trình trong `.claude/skills/them-trang/SKILL.md`. Gọi thủ công bằng `/them-trang` nếu muốn chọn trực tiếp. Skill dùng [khuon-trang.md](../.claude/skills/them-trang/khuon-trang.md) làm khung tham khảo và yêu cầu kiểm tra điều hướng, stylesheet, nội dung cùng responsive.

Ví dụ: `/them-trang Tạo trang giới thiệu chi nhánh tại Đà Nẵng`

## Agent rà soát

### `soat-lien-ket`

Chọn agent `soat-lien-ket` khi muốn rà soát riêng liên kết nội bộ, fragment, tài nguyên và liên kết món sang trang chi tiết trên toàn dự án. Agent chỉ đọc và trả về các phát hiện kèm vị trí trong tệp.

Ví dụ: yêu cầu Claude dùng agent `soat-lien-ket` để kiểm tra toàn bộ liên kết nội bộ.

## Quy ước chung

Đọc [quy-uoc.md](./quy-uoc.md) trước khi thực hiện thay đổi rộng. Các công cụ chỉ làm trong phạm vi yêu cầu; chúng không tự thay thế hoặc xóa tệp hiện có.
