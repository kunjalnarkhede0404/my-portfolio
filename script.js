
// Display the current year in the footer

document.getElementById("year").textContent =
    new Date().getFullYear();


// Mobile navigation menu

const menuButton = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuButton.setAttribute("aria-expanded", isOpen);

});


// Close menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuButton.setAttribute("aria-expanded", "false");

    });

});


// Welcome message

console.log("Welcome to Kunjal's Portfolio!");

