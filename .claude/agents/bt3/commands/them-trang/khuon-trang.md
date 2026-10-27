# Khuôn trang HTML tĩnh

Dùng đây làm khung cấu trúc, không sao chép placeholder thành nội dung thật. Trước khi hoàn thiện, đối chiếu header, điều hướng và footer với `index.html` hoặc `search.html`.

```html
<!doctype html>
<html lang="vi">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#173c32">
    <meta name="description" content="[Mô tả ngắn do người dùng cung cấp]">
    <title>[Tiêu đề trang] — Cơm nhà</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <!-- Sao chép header hiện có và điều chỉnh liên kết quay lại trang chủ. -->
    <header class="site-header" id="dau-trang">
      <div class="nav-wrap">
        <a class="brand" href="index.html" aria-label="Cơm nhà — về trang chủ">
          <span class="brand-mark" aria-hidden="true">CN</span>
          <span class="brand-name">CƠM NHÀ<small>VỊ NGON BA MIỀN</small></span>
        </a>
        <!-- Giữ điều hướng nhất quán với các trang hiện có. -->
      </div>
    </header>

    <main class="page-width">
      <section class="section-pad" aria-labelledby="page-title">
        <p class="eyebrow">[NHÃN MỤC]</p>
        <h1 id="page-title">[Tiêu đề trang]</h1>
        <p>[Nội dung đã được người dùng cung cấp]</p>
      </section>
    </main>

    <!-- Sao chép footer hiện có và chỉ giữ các liên kết còn hợp lệ. -->
    <footer class="site-footer">
      <div class="footer-inner page-width">
        <a class="brand footer-brand" href="index.html">
          <span class="brand-mark" aria-hidden="true">CN</span>
          <span class="brand-name">CƠM NHÀ<small>VỊ NGON BA MIỀN</small></span>
        </a>
        <p>Món ngon ba miền.<br>Bữa cơm Việt thân quen.</p>
      </div>
    </footer>
  </body>
</html>
```

Các lớp `page-width`, `section-pad`, `eyebrow`, `site-header` và `site-footer` lấy từ stylesheet hiện có. Kiểm tra rằng đường dẫn tương đối `styles.css` đúng với vị trí của trang mới.

# Khuôn HTML cho trang mới

Đây là tài liệu mẫu tham khảo khi tạo trang mới cho website.

## Quy tắc sử dụng

- Trước tiên đọc HTML của các trang đang có.
- Giữ nguyên cấu trúc header, menu và footer đang được sử dụng.
- Dùng đường dẫn tới `style.css` hiện có, điều chỉnh theo vị trí trang mới.
- Giữ đúng quy tắc đặt tên file và cấu trúc nội dung của dự án.
- Không thay thế nội dung mẫu này một cách máy móc nếu website có cấu trúc khác.

## Khuôn HTML tham khảo

Sao chép cấu trúc tương ứng từ trang hiện tại của dự án, sau đó thay phần nội dung chính bằng nội dung của trang mới.

Một trang thông thường gồm:

1. `<!DOCTYPE html>` và phần tử `html`.
2. `head` với `meta charset`, viewport và tiêu đề.
3. Liên kết tới stylesheet `style.css` hiện có.
4. `header` chứa logo hoặc tên website.
5. `nav` có menu thống nhất với các trang khác.
6. `main` chứa nội dung riêng của trang mới.
7. `footer` dùng chung cấu trúc với website.
8. Script hiện có nếu trang cần sử dụng chức năng JavaScript.

## Kiểm tra sau khi tạo

- Trang mới sử dụng đúng stylesheet cũ.
- Menu có cùng các mục và đường dẫn với ba trang còn lại.
- Các liên kết điều hướng hoạt động.
- Nội dung hiển thị tốt trên màn hình nhỏ.