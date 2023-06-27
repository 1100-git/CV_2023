// burger
const bool = false;
const body = document.querySelector("body");
const burger = document.querySelector(".header-btn");
const menu = document.querySelector(".nav");


burger.addEventListener('click',
  function () {
    burger.classList.toggle("header-btn-active");
    menu.classList.toggle("nav-active");
    document.body.classList.toggle("stop-scroll");
  }
);

body.addEventListener('click',
  function (el) {
    if (el.target !== burger && el.target !== menu) {
      burger.classList.remove("header-btn-active");
      menu.classList.remove("nav-active");
      document.body.classList.remove("stop-scroll");
    }
  }
);