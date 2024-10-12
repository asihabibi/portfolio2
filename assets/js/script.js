// script.js

// Function to toggle the mobile menu
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    // Toggle between display block and none
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
}
