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


const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function updateIcon(){
    if(document.documentElement.classList.contains('dark')){
        theme.Icon.classList.replace('fa-moon', 'fa-sun');
    } else{
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
}
themeToggle.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('dark');
    localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    updateIcon();
});
updateIcon(); //set correct icon on load