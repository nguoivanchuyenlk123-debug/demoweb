# Cấu hình dự án Cơm nhà

Các tệp trong `.claude/` cung cấp hướng dẫn, quy trình và cấu hình Claude Code riêng cho website.

## Cây thư mục

```text
bt 1/ — Mã nguồn và tài liệu website Cơm nhà.
├── .claude/ — Cấu hình Claude Code dùng chung trong dự án.
│   ├── agents/ — Agent chuyên biệt và giới hạn công cụ của chúng.
│   ├── commands/ — Các lệnh gọi thủ công theo quy trình.
│   └── skills/ — Hướng dẫn chuyên môn được nạp theo yêu cầu.
│       ├── static-site/ — Quy ước chỉnh sửa website tĩnh.
│       └── them-trang/ — Quy trình và tài nguyên tạo trang HTML.
│           └── khuon-trang.md — Khuôn HTML tham khảo độc lập.
├── docs/ — Tài liệu cách dùng lệnh và quy ước website.
│   └── anh/ — Hình minh họa dùng trong tài liệu dự án.
```

## Tệp cấu hình chính

- `settings.json` yêu cầu xác nhận trước một số lệnh Bash có tác động phá hủy hoặc thay đổi từ xa.
- `.gitignore` loại trừ `.env`, `.claude/settings.local.json` và các cấu hình bí mật cục bộ.
- `CLAUDE.md` ở thư mục gốc mô tả mục tiêu, công nghệ, quy ước, điều cấm và cách kiểm tra.

## Quy trình dùng tay

- `/add-dish`: thêm món ăn và đồng bộ thẻ trên trang chủ, trang tìm kiếm, dữ liệu chi tiết.
- `/review-ui`: rà soát thay đổi giao diện, không sửa tệp.
- `/soat-ba-trang`: rà soát ba trang chính và hành vi liên quan.
- `/them-tin`: thêm nội dung tin do người dùng cung cấp.

Skill `static-site` và `them-trang` được nạp khi yêu cầu phù hợp. Agent `soat-lien-ket` rà liên kết nội bộ ở chế độ chỉ đọc.

Xem [cách dùng lệnh](../docs/cach-dung-lenh.md) và [quy ước website](../docs/quy-uoc.md) để biết thêm chi tiết. Không lưu thông tin xác thực vào cấu hình dùng chung; đặt cấu hình cá nhân trong `.claude/settings.local.json`.
