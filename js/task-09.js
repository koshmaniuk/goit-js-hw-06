"use strict";

const btn = document.querySelector(".change-color")
const body = document.querySelector("body")
const colorCode = document.querySelector(".color")

btn.addEventListener("click", handleClick)

function handleClick() {
  const newColorCode = getRandomHexColor() 
  body.style.backgroundColor = newColorCode;
  colorCode.textContent = newColorCode;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
