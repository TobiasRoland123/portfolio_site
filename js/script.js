const burger = document.querySelector("button");
const menu = document.querySelector(".nav-menu");
// portfolie variabler
const burger_portfolie = document.querySelector(".burger_portfolie");
const menu_portfolie = document.querySelector(".nav_menu_portfolie");
const logo_portfolie = document.querySelector(".logo_portfolie");
const arrow_down_forside = document.querySelector(".scroll_btn_down_White");

window.addEventListener("load", sidenVises);

function sidenVises() {
  arrow_down_forside.classList.add("bounce");
}

burger.addEventListener("click", activeteBurgerMenu);

function activeteBurgerMenu() {
  console.log("activeteBurgerMenu");
  burger.classList.toggle("active");
  menu.classList.toggle("active");
}

// burger portfolie active
burger_portfolie.addEventListener("click", activeteBurgerMenuPortfolie);

function activeteBurgerMenuPortfolie() {
  console.log("activeBurgerMenuPortfolie");
  burger_portfolie.classList.toggle("active_portfolie");
  menu_portfolie.classList.toggle("active_portfolie");
  logo_portfolie.classList.toggle("active_logo_portfolie");
}

// arrow_down_forside.addEventListener("click", scrollDownForside);
// arrow_up_footer.addEventListener("click", scrollUpToNav);

// function scrollDownForside() {
//   document.documentElement.scrollTop = 750; // For Chrome, Firefox, IE and Opera
// }

// function scrollUpToNav() {
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }
