"use strict";

const input = document.querySelector("#validation-input")
const lengthСondition = Number(input.dataset.length)

input.addEventListener("blur", handleBlur)

function handleBlur(event) {
 const inputLength = event.currentTarget.value.length;

 if (inputLength === lengthСondition) {
        input.classList.add("valid")
        input.classList.remove("invalid")
    } else {
        input.classList.remove("valid")
        input.classList.add("invalid")
    }
}
