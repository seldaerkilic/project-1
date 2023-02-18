// Create hamburger menu

const menu = document.querySelector('.menu');
const nav = document.querySelector('.navBar');
const menuBackground = document.querySelector('.menuBackground');

menu.addEventListener('click', () => {
    menu.classList.toggle('open')
    nav.classList.toggle('navList')
    menuBackground.classList.toggle('greenShade')
})

