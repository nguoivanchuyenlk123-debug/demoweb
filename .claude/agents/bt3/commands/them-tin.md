---
description: "Thêm một tin hoặc thông báo do người dùng cung cấp vào đúng vị trí trên website."
argument-hint: "Mô tả nội dung tin, trang đích và liên kết hoặc hình ảnh cần dùng"
---

Thêm tin

---
description: Thêm một mục tin mới vào website, tự đọc cấu trúc dữ liệu hiện có và chống trùng.
---

# Lệnh thêm tin

Đọc mã nguồn dự án trước khi thực hiện.

## Quy trình bắt buộc

1. Tìm file dữ liệu hiện tại, ưu tiên `du-lieu.js`.
2. Đọc ít nhất 2 mục dữ liệu cũ để xác định cấu trúc trường, kiểu dữ liệu, cách đặt ID và cách website hiển thị nội dung.
3. Đọc mã nguồn trang chủ và trang tìm kiếm để hiểu cách dữ liệu được sử dụng.
4. Không hỏi lại người dùng về các trường đã có thể suy ra từ dữ liệu cũ.
5. Từ `$ARGUMENTS`, tạo một mục mới theo đúng cấu trúc đã tìm thấy.
6. Kiểm tra dữ liệu bắt buộc và luật chống trùng:
   - Không trùng ID.
   - Không trùng slug hoặc đường dẫn định danh.
   - Không trùng tiêu đề sau khi chuẩn hóa chữ hoa, chữ thường và khoảng trắng.
   - Không tự tạo trường tùy ý nếu cấu trúc cũ không có trường đó.
7. Nếu thiếu thông tin bắt buộc mà không thể suy ra an toàn, hãy hỏi người dùng.
8. Bổ sung mục mới vào đúng file dữ liệu, giữ nguyên các mục cũ.
9. Kiểm tra trang chủ có thể hiển thị mục mới và trang tìm kiếm có thể tìm thấy mục đó.
10. Chạy các kiểm tra phù hợp với dự án, báo cáo file đã sửa và kết quả.

## An toàn

- Không xóa hoặc ghi đè dữ liệu cũ.
- Không sửa giao diện ngoài phạm vi cần thiết.
- Không tuyên bố kiểm tra thành công nếu chưa thực sự kiểm tra.
- Nếu phát hiện dữ liệu trùng, dừng và báo cáo trước khi ghi.
- Chỉ chỉnh sửa file cần thiết cho chức năng thêm tin.
Trước khi sửa:

1. Đọc trang đích và các mẫu HTML/CSS liên quan để tìm vị trí phù hợp, giữ nguyên phong cách hiện có.
2. Nếu chưa rõ trang hoặc vị trí hiển thị, hoặc thiếu nội dung, thời hạn, liên kết hay hình ảnh cần thiết, hỏi người dùng thay vì tự bịa thông tin.
3. Nếu yêu cầu thực chất là thêm món vào thực đơn, dùng quy trình `/add-dish` thay vì tạo tin mới.

Khi thông tin đã rõ:

1. Thêm nội dung bằng HTML ngữ nghĩa và tái sử dụng lớp CSS sẵn có nếu phù hợp.
2. Chỉ thêm CSS hoặc JavaScript khi cần thiết; đảm bảo dùng được trên màn hình nhỏ và có nhãn truy cập phù hợp.
3. Không tạo trang tin tức hoặc thay đổi cấu trúc điều hướng nếu người dùng chưa yêu cầu.
4. Kiểm tra liên kết, nội dung mới và phạm vi thay đổi; tóm tắt tệp đã sửa và những gì đã kiểm tra.
