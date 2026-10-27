---
name: them-trang
description: "Use when the user asks in Vietnamese to add or create a website page, for example “thêm trang”, “làm trang giới thiệu”, “web cần thêm một trang nữa”, or “tạo trang giới thiệu”. Create a static HTML page for the Cơm nhà website and keep navigation consistent."
---

# Tạo trang mới cho website

Tạo một trang HTML độc lập, nhất quán với website tĩnh Cơm nhà.

## Quy trình

1. Xác định mục đích, nội dung, tên tệp, nhãn và vị trí liên kết trong menu. Hỏi người dùng nếu các lựa chọn này chưa rõ hoặc cần nội dung nghiệp vụ chưa được cung cấp.
2. Đọc `CLAUDE.md`, [khuon-trang.md](./khuon-trang.md), và cấu trúc header/menu của `index.html`, `search.html`, `detail.html` cùng CSS/JavaScript điều khiển menu.
3. Tạo trang HTML mới dựa trên khuôn; điều chỉnh header/footer để giữ thương hiệu, menu nhất quán và đường dẫn tương đối đúng.
4. Thêm liên kết đến trang mới vào menu chính của cả ba trang hiện có (`index.html`, `search.html`, `detail.html`) và menu của trang mới. Giữ nguyên các mục và đường dẫn điều hướng đang có; dùng URL tương đối phù hợp với từng trang, không làm mất các fragment hiện hữu.
5. Dùng `styles.css` chung, văn bản tiếng Việt, HTML ngữ nghĩa, nhãn truy cập và bố cục phù hợp màn hình nhỏ. Chỉ thêm JavaScript khi trang cần tương tác; giữ các tham số `q` và `category` nếu thay đổi luồng tìm kiếm.
6. Mở trang mới trong trình duyệt và kiểm tra trên màn hình rộng lẫn hẹp: liên kết menu xuất hiện, mở đúng trang, menu di động mở/đóng được, và không có tràn ngang. Nếu môi trường trình duyệt không khả dụng, nêu rõ bước này chưa được kiểm tra.
7. Kiểm tra liên kết nội bộ, ID fragment, đường dẫn tài nguyên và trạng thái dữ liệu rỗng; báo rõ các kiểm tra chưa thể thực hiện.

## Giới hạn

- Không thêm framework, phụ thuộc hoặc công cụ build.
- Không tự bịa nội dung, hình ảnh, giá, thông tin liên hệ hoặc đường dẫn nghiệp vụ.
- Không ghi đè trang hiện có; nếu tên tệp đã được dùng, xác định cách xử lý với người dùng trước khi thay thế.

## Tiêu chí hoàn thành

- Trang mới dùng stylesheet chung `styles.css`, không tạo stylesheet trùng lặp.
- Menu chính có cùng các mục và nhãn trên ba trang hiện có và trang mới; mọi liên kết đều trỏ đúng đích.
- Kiểm tra menu và trang mới trên desktop lẫn mobile, rồi báo kết quả thực tế.
- `khuon-trang.md` là tệp khuôn riêng; tham chiếu tới nó thay vì sao chép khuôn đầy đủ vào hướng dẫn này.

---
name: tao-trang
description: >-
  Dùng skill này khi người dùng yêu cầu tạo trang HTML mới, thêm trang
  vào website hiện có, hoặc muốn tạo trang mới cùng giao diện với các trang
  hiện tại. Kích hoạt khi người dùng nói tự nhiên như "Tạo thêm một trang
  giới thiệu", "Thêm trang tin tức vào website", "Tạo trang mới giống giao
  diện hiện tại", hoặc "Làm thêm trang liên hệ". Luôn đọc khuôn-trang.md
  trước khi tạo trang và tái sử dụng style.css hiện có.
---

# Skill tạo trang mới

Khi được kích hoạt:

1. Đọc cấu trúc dự án và xác định các trang HTML hiện có.
2. Đọc `style.css` hiện có, không tự tạo stylesheet thay thế.
3. Đọc menu điều hướng từ các trang hiện tại.
4. Đọc tệp `khuon-trang.md` để lấy khuôn HTML.
5. Tạo trang mới theo khuôn và quy ước của website.
6. Dùng lại `style.css` bằng đường dẫn tương đối đúng.
7. Giữ menu nhất quán với ba trang hiện có; sau khi tạo phải kiểm tra đủ bốn trang.
8. Kiểm tra đường dẫn liên kết, responsive và lỗi HTML nếu có công cụ phù hợp.
9. Báo cáo file đã tạo và kết quả kiểm tra.

## Tài liệu tham chiếu

Đọc `khuon-trang.md` trong cùng thư mục Skill trước khi tạo trang.

## Quy tắc

- Không tự ý viết lại toàn bộ website.
- Không nhân bản CSS nếu có thể tái sử dụng stylesheet hiện tại.
- Không bỏ sót trang mới trong hệ thống điều hướng.
- Không báo đạt nếu chưa kiểm tra thực tế.