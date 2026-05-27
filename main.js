const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.replace('fa-bars', 'fa-xmark') || menuIcon.classList.replace('fa-xmark', 'fa-bars');
});

// Close menu when a link is clicked
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.replace('fa-xmark', 'fa-bars');
    });
});