// skipcq: JS-0241
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    const closeButton = document.getElementById('close-button');

    // skipcq: JS-0241
    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });

    // skipcq: JS-0241
    closeButton.addEventListener('click', function() {
        navLinks.classList.remove('show');
    });
});

