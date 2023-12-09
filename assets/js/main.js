/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Menu show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Menu hidden
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  document.getElementById("header");
  // viewport height 50 ih bol scroll-header class nemeh
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== PARALLAX ===============*/
let parallax = new Rellax(".parallax");

/*=============== GSAP ANIMATION ===============*/
gsap.from(".home__village", 1.2, { opacity: 0, y: 100, delay: 0.1 });
gsap.from(".home__pine", 1.2, { opacity: 0, y: 150, delay: 0.3 });
gsap.from(".home__mountain-2", 1.2, { opacity: 0, x: 150, delay: 0.5 });
gsap.from(".home__mountain-3", 1.2, { opacity: 0, x: -150, delay: 0.6 });
gsap.from(".home__mountain-1", 1.2, { opacity: 0, x: 250, delay: 0.7 });
/*=============== SCROLL REVEAL ANIMATION ===============*/
