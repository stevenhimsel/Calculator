// Rechenlogik des Taschenrechners

const btn = document.querySelectorAll(".buttons");
const display = document.querySelector("#display");

// Rechenfunktionen 

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(zahl1, operator, zahl2) {
    if (operator === "+") {
        return add(zahl1, zahl2);
    } else if (operator === "-") {
        return subtract(zahl1, zahl2);
    } else if (operator === "*") {
        return multiply(zahl1, zahl2);
    } else if (operator === "/") {
        return divide(zahl1, zahl2);
    } else {
        return "Bitte eine Zahl eingeben!";
    }
}

let zahl1 = "";
let zahl2 = "";
let operator = "";

btn.forEach((btn) => {

btn.addEventListener("click", () => {
    if (btn.textContent === "+" || btn.textContent === "-" || btn.textContent === "*" || btn.textContent === "/") {
        operator += btn.textContent;
        display.textContent = operator;
    } else if (operator === "") {
       zahl1 += btn.textContent;
       display.textContent = zahl1;
    } else if (operator === "") { 
        zahl2 += btn.textContent;
        display.textContent = zahl2;
    }
  });
});


