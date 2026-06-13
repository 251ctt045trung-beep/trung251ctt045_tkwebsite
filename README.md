# ☕ The Coffee Cup - Landing Page

Dự án website giao diện Front-end (Landing Page) giới thiệu cho quán cà phê **The Coffee Cup**. Giao diện tích hợp các hiệu ứng cuộn trang mượt mà, thanh điều hướng thông minh và form liên hệ tương tác trực quan với người dùng bằng JavaScript thuần (Vanilla JS).

---

## 🚀 Các Tính Năng Chính

* **Sticky Header:** Thanh Menu tự động thay đổi màu nền và cố định ở đầu trang khi người dùng cuộn xuống quá 50px, giúp tối ưu hóa không gian trải nghiệm.
* **Smooth Scroll (Cuộn mượt):** Tự động tính toán vị trí và cuộn mượt mà đến các phân đoạn (Sections) tương ứng khi nhấn vào các liên kết trên Menu (ví dụ: `#about`, `#menu`, `#contact`).
* **Contact Form Validation:** Xử lý sự kiện gửi dữ liệu từ Form liên hệ, ngăn chặn hành vi tải lại trang (reload) mặc định, kiểm tra thông tin và phản hồi thông báo thân thiện đến khách hàng.

---

## 📂 Cấu Trúc Thư Mục Dự Án

```text
├── index.html          # File cấu trúc giao diện chính
├── css/
│   └── style.css       # File định dạng giao diện và hiệu ứng (.sticky, smooth scroll)
└── js/
    └── script.js       # File xử lý logic JavaScript (Đoạn code hiện tại của bạn)
