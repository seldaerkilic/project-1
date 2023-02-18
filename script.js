// Create hamburger menu

const menu = document.querySelector('.menu');
const nav = document.querySelector('.navBar');

menu.addEventListener('click', () => {
    menu.classList.toggle('open')
    nav.classList.toggle('navList')
})

