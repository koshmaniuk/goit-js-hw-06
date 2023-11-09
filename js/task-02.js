"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients")

function createMarkUp(array) {
  const markup = array.map((name) => {
    const li = document.createElement("li");
    li.textContent = name;
    li.classList.add("item");
    return li;
  })
  list.append(...markup)
}

createMarkUp(ingredients)