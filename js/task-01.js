"use strict";

const list = document.querySelector('#categories')
const children = list.children;

console.log(`Number of categories: ${children.length}`)

const items = Array.from(children)
items.forEach((item) => {
    const name = item.querySelector("h2").textContent
    const number = item.querySelectorAll("li").length
    console.log(`Category: ${name}`)
    console.log(`Elements: ${number}`)
})
