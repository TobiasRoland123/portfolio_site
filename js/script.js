const burger = document.querySelector("button");
const menu = document.querySelector(".nav-menu");
const arrow_down_forside = document.querySelector(".scroll_btn_down_White");
const arrow_up_footer = document.querySelector(".to_top");

window.addEventListener("load", sidenVises);

function sidenVises() {
  arrow_down_forside.classList.add("bounce");
}

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
});

// arrow_down_forside.addEventListener("click", scrollDownForside);
// arrow_up_footer.addEventListener("click", scrollUpToNav);

// function scrollDownForside() {
//   document.documentElement.scrollTop = 750; // For Chrome, Firefox, IE and Opera
// }

// function scrollUpToNav() {
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }
