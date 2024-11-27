
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });
        });
    });

    // Welcome alert
    const welcomeAlert = alert('Welcome to Okinawa Ryokan! Experience the heart of Japan.');
    setTimeout(() => {
        if (welcomeAlert) {
            welcomeAlert.close();
        }
    }, 5000); // Fecha o alerta após 5 segundos
});

// Toggle mobile navigation menu
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
}

// Image carousel auto-play
const carouselImages = document.querySelectorAll(".carousel-item");
let currentImageIndex = 0;
setInterval(() => {
    carouselImages[currentImageIndex].classList.remove("active");
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    carouselImages[currentImageIndex].classList.add("active");
}, 3000); // Muda a imagem a cada 3 segundos

// Form validation
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    if (name === "" || email === "") {
        e.preventDefault();
        alert("Please fill in all required fields.");
    }
});
// Back to top button
const backToTopButton = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});