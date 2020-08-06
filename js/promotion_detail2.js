const hamburger = document.querySelector('.hamburger');
const wrapmenu = document.querySelector('.wrapMenu');
const dropdownBtn = document.querySelector('.wrapMenu .dropdown');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    wrapmenu.classList.toggle("open");

    nav.classList.toggle("open");
})