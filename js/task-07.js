"use strict";

const inputRange = document.querySelector("#font-size-control")
const spanText = document.querySelector("#text")

inputRange.addEventListener("input", handleInput)

function handleInput(event) {
    spanText.style.fontSize = `${event.currentTarget.value}px`;
    }
