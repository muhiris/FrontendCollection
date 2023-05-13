"use strict";
const menu = document.querySelector(".hidden");
const menuList = document.querySelector("ul");
const img = document.querySelector(".logo");
const section = document.querySelector("section");
let flag = 2;
menu.addEventListener("click", function () {
  img.classList.toggle("black");
  if (flag % 2 == 0) {
    menu.textContent = "close";
    flag++;
  } else {
    menu.textContent = "menu";
    flag++;
  }

  section.classList.toggle("black");
  menuList.classList.toggle("hide-responsive");
});
