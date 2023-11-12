"use strict";

let counterValue = 0;

const number = document.querySelector("#value")

const decrBtn = document.querySelector('#counter button[data-action="decrement"]')
const decrClick = () => {
  counterValue -= 1; 
  number.textContent = counterValue;
}
decrBtn.addEventListener("click", decrClick);

const incrBtn = document.querySelector('#counter button[data-action="increment"]')
const incrClick = () => {
  counterValue += 1;
  number.textContent = counterValue;
}
incrBtn.addEventListener("click", incrClick);


  
 
   



















  







