// Chờ cho toàn bộ giao diện HTML tải xong rồi mới chạy JavaScript
document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. HIỆU ỨNG ĐỔI MÀU THANH NAVBAR KHI CUỘN TRANG ---
    const header = document.querySelector("header");
    
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            // Khi cuộn xuống quá 50px, thanh menu sẽ đậm và có bóng đổ rõ hơn
            header.style.backgroundColor = "#2b1f15"; 
            header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
        } else {
            // Khi quay lại trên cùng, trả về màu nâu gốc
            header.style.backgroundColor = "#4a3525";
            header.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
        }
    });

    // --- 2. XỬ LÝ SỰ KIỆN GỬI FORM ĐẶT BÀN / LIÊN HỆ ---
    const contactForm = document.querySelector(".contact-form form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            // Ngăn chặn trang web bị tải lại (hành vi mặc định của form)
            event.preventDefault();

            // Lấy dữ liệu người dùng nhập vào
            const name = contactForm.querySelector("input[type='text']").value;
            const email = contactForm.querySelector("input[type='email']").value;
            const message = contactForm.querySelector("textarea").value;

            // Hiển thị thông báo cá nhân hóa (Bạn có thể thay bằng gửi dữ liệu lên server tại đây)
            alert(`Cảm ơn ${name}! Yêu cầu đặt bàn của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ lại qua email: ${email} sớm nhất có thể.`);

            // Xóa sạch các ô nhập liệu sau khi gửi thành công
            contactForm.reset();
        });
    }
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            console.log(`Đang chuyển đến phần: ${link.textContent}`);
        });
    });

});