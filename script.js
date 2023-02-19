// First JS feature: Create hamburger menu for @media mex-width 940px. 
// Got help from a Youtube Video. I feel like the code relies on CSS more than JS. 
// Come back to the menu again.

const menu = document.querySelector('.menu');
const nav = document.querySelector('.navBar');
const menuBackground = document.querySelector('.menuBackground');

menu.addEventListener('click', () => {
    menu.classList.toggle('open')
    nav.classList.toggle('navList')
    menuBackground.classList.toggle('greenShade')
})




// Second JS feature: Carousel slider for home page quotation

// Style notes:
    // Replace the arrow images with FA icons - having error for fontawesome site- CORS header 'Access-Control-Allow-Origin' missing
    // Add transition effect for smooth change

    
// JS Pseudocode
// Save values with DOM under an object. Create a property with p elements as array. Then later, use index number to toggle p elements.

const quoteSlider = {
    quotes: Array.from(document.querySelectorAll('.quoteCard')),
    currentIndex: 0,
    arrowLeft: document.querySelector('.arrowLeft'),
    arrowRight: document.querySelector('.arrowRight'),
};

// Listen to click event on each arrow, depending on index number create a loop or if statement.

// ======================================================
// RIGHT NOW HAVING ERROR ON EVENT LISTENER HANDLE EVENT. 
// CHECK THE LOGIC OF IF STATEMENTS, AND HANDLE EVENT.
// ======================================================

quoteSlider.arrowRight.addEventListener("click", () => {
    if (currentIndex <= quoteCard.length - 1) {
        return quoteCard.currentIndex[currentIndex++];
    } else {
        return quoteCard.currentIndex[0];
    }
});

quoteSlider.arrowLeft.addEventListener("click", () => {
    if (currentIndex >= quoteCard.length) {
        return quoteCard.currentIndex[currentIndex--];
    } else {
        return quoteCard.currentIndex[0];
    }
});

// Define the funtion to call
function updateQuoteSlider() {
    // Loop through the quotes and hide others via index number
    quoteSlider.quotes.forEach((quote, index) => {
        if (index === quoteSlider.currentIndex) {
            quote.style.display = 'block';
        } else {
            quote.style.display = 'none';
        }
    });
}

// Don't for get to call the function
updateQuoteSlider();



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