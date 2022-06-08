const burger = document.querySelector("button");
const menu = document.querySelector(".nav-menu");
const arrow_down_forside = document.querySelector(".scroll_btn_down_White");

window.addEventListener("load", sidenVises);

function sidenVises() {
  arrow_down_forside.classList.add("bounce");
}

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
});
