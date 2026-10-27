# Quy ước website Cơm nhà

## Cấu trúc

- Website dùng HTML, CSS và JavaScript thuần; không thêm framework hay phụ thuộc nếu chưa được yêu cầu.
- `index.html`, `search.html` và `detail.html` là ba trang chính.
- `script.js`, `search.js` và `detail.js` lần lượt xử lý tương tác trang chủ, tìm kiếm và chi tiết món.
- `styles.css` chứa kiểu dùng chung; ưu tiên các lớp và quy tắc responsive sẵn có.

## Thực đơn và tìm kiếm

- Khi thêm hoặc đổi món, giữ dữ liệu và đường dẫn đồng bộ giữa thẻ món ở `index.html`, `search.html` và bản ghi tương ứng trong `detail.js`.
- Mỗi ID món phải duy nhất và khớp tham số `id` trên đường dẫn `detail.html`.
- Danh mục tìm kiếm hiện dùng `rice`, `soup` và `drink`; không đổi tên giá trị nếu chưa cập nhật đồng bộ các trang và JavaScript.
- Giữ cả hai tham số URL `q` và `category` khi cập nhật tìm kiếm hoặc bộ lọc.
- Trạng thái không có kết quả và ID món không hợp lệ phải được hiển thị rõ, không giả vờ thành công.

## Giao diện và khả năng truy cập

- Viết nội dung giao diện bằng tiếng Việt và giữ nhất quán thương hiệu Cơm nhà.
- Dùng HTML ngữ nghĩa, nhãn biểu mẫu, văn bản thay thế ảnh phù hợp và trạng thái ARIA chính xác.
- Đảm bảo liên kết và điều khiển có thể thao tác bằng bàn phím, giữ trạng thái focus dễ nhận biết.
- Kiểm tra bố cục trên màn hình hẹp; không thêm nội dung hoặc dữ liệu nghiệp vụ không do người dùng cung cấp.

## Kiểm tra

- Đọc trang, script và CSS liên quan trước khi sửa.
- Sau khi sửa, kiểm tra đúng luồng bị ảnh hưởng, liên kết nội bộ và các tham số URL liên quan.
- Có thể chạy máy chủ phát triển bằng `npm run dev`. Dự án hiện không cấu hình build hoặc test runner; không thêm chúng chỉ để kiểm tra một thay đổi nhỏ.
