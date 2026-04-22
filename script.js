const burger = document.getElementById("burger");
const menu = document.getElementById("navbar-menu");

burger.addEventListener("click", () => {
    menu.classList.toggle("active");
});


const toggleDark = document.getElementById("toggle-dark");
toggleDark.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Reveal effect on scroll
const revealElements = () => {
    const reveals = document.querySelectorAll(".reveal");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.1
    });

    reveals.forEach(el => observer.observe(el));
};

document.addEventListener("DOMContentLoaded", revealElements);
