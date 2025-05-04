// const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('.header');
let lastScroll = 0;

// hamburger js
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    console.log("clicked on menu");
    hamburger.classList.toggle('h-active');
    navLinks.classList.toggle('h-active');
});