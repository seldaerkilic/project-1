// First JS feature: Create hamburger menu for @media mex-width 940px. 
// Got help from a Youtube Video on toggling class logic.

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

// Save variables with DOM

const arrowLeft = document.querySelector('.arrowLeft');
const arrowRight = document.querySelector('.arrowRight');

// =============================================================================
// Saving p elements as array in object and changing the p on each click did not work out, but I still feel like it can. Come back to this!

// const pElement = document.getElementsByClassName('quoteCard')
// console.log(pElement[1]);

// const para1 = pElement[0]
// const para3 = pElement[2]

// const pArray = pElement.filter(function(activeQuote) {
//     return activeQuote = pElement.getElementByClassName('quoteCardShow');
// })
// console.log(pArray);

// handleClick() {
//     for (i = 0; i < 3; i++){
//         return pElement[i].classList.toggle('quoteCardShow');
//     }
//     // if (i === 3){
//     //     return para1.classList.toggle('quoteCardShow');
//     // }
// }

// console.log(handleClick());

// arrowRight.addEventListener('click', handleClick());
// ========================================================================

const para1 = document.getElementById('quoteCard1');
const para2 = document.getElementById('quoteCard2');
const para3 = document.getElementById('quoteCard3');
let currentCard = 1;

// Listen to click event on each arrow, change the class of p element to display the content.
// Somehow it's working for second paragraph, but not working for thirs one.
// Come back to this!

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