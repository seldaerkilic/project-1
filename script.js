// First JS feature: Create hamburger menu for @media mex-width 940px. 
// Got help from a Youtube Video. I feel like the code relies on CSS more than JS. 
// Come back to the menu again, and fix the positioning of menu items on scroll down.

const menu = document.querySelector('.menu');
const nav = document.querySelector('.navBar');
const menuBackground = document.querySelector('.menuBackground');

menu.addEventListener('click', () => {
    menu.classList.toggle('open')
    nav.classList.toggle('navList')
    menuBackground.classList.toggle('greenShade')
})

// Second JS feature: Carousel slider for home page quotation

// Replace the arrow images with FA icons - having ERROR for fontawesome site- CORS header 'Access-Control-Allow-Origin' missing

// JS Pseudocode
// Save variables with DOM

const arrowLeft = document.querySelector('.arrowLeft');
const arrowRight = document.querySelector('.arrowRight');

const para1 = document.getElementById('quoteCard1');
const para2 = document.getElementById('quoteCard2');
const para3 = document.getElementById('quoteCard3');
let currentCard = 1;

// Listen to click event on each arrow, depending on index number create a loop or if statement.
// Para3 is not showing, and this is far from a JS solution.

arrowRight.addEventListener("click", (e) => {
    e.preventDefault();
        if (currentCard = 2) {
            para1.classList.toggle('quoteCard');
            para2.classList.toggle('quoteCardShow');
            para3.classList.toggle('quoteCard');
        } else if (currentCard = 3) {
            para1.classList.toggle('quoteCard');
            para2.classList.toggle('quoteCard');
            para3.classList.toggle('quoteCardShow');
        } else if (currentCard = 1) {
            para1.classList.toggle('quoteCardShow');
            para2.classList.toggle('quoteCard');
            para3.classList.toggle('quoteCard');
        }
});

arrowLeft.addEventListener("click", (e) => {
    e.preventDefault();
        if (currentCard = 2) {
            para1.classList.toggle('quoteCard');
            para2.classList.toggle('quoteCardShow');
            para3.classList.toggle('quoteCard');
        } else if (currentCard = 3) {
            para1.classList.toggle('quoteCard');
            para2.classList.toggle('quoteCard');
            para3.classList.toggle('quoteCardShow');
        } else if (currentCard = 1) {
            para1.classList.toggle('quoteCardShow');
            para2.classList.toggle('quoteCard');
            para3.classList.toggle('quoteCard');
        }
});



// Third JS feature: Pop-up message when scrolled down. 
// Got help from ChatGPT. I learned how to use scroll event on Y axis, and how to show the pop-up only once per visit.

const distance = 200;

let alertShown = false;

window.addEventListener('scroll', () => {
    const scrollDown = window.scrollY;

    if (scrollDown >= distance && !alertShown) {
        alert('You scrolled! Big brother is watching you!');

        alertShown = true;
    }
});