// Get the elements
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

// Add event listener to the menu button
menuToggle.addEventListener('click', () => {
    // Toggle the "active" class on the navigation menu
    navMenu.classList.toggle('active');
    // Toggle the "open" class on the menu icon
    menuToggle.classList.toggle('open');
});
