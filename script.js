document.addEventListener("DOMContentLoaded", () => {
    // Booking Form Submission
    document.getElementById("booking-form").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Your table has been booked successfully!");
    });

    // Order Form Submission
    document.getElementById("order-form").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Your order has been placed successfully!");
    });

    // Smooth Scrolling for Nav Links
    document.querySelectorAll("nav ul li a").forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });
});
