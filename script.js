const _ADD = "+";
const _SUBTRACT = "-";
const _MULTIPLY = "*";
const _DIVIDE = "/";

let a = "";
let b = "";
let operator = "";
let sum = 0;

const display = document.querySelector("#display");
display.textContent = sum;

const buttons = document.querySelectorAll(".calc-btn");
buttons.forEach((btn) =>
  btn.addEventListener("click", (e) => changeDisplay(e, display))
);

const enterBtn = document
  .querySelector("#enter")
  .addEventListener("click", () => getSum(display));

const clearBtn = document
  .querySelector("#clear")
  .addEventListener("click", () => clearDisplay(display));

function getSum(display) {
  console.log("hejsan");
  if (a === "") return;

  console.log("hej");
  sum = operate(a, b, operator);

  display.textContent = sum;
  clearDisplay(display, false);
}

function clearDisplay(display, clearSum = true) {
  a = "";
  b = "";
  operator = "";
  sum = 0;
  if (clearSum) {
    display.textContent = sum;
  }
}

function changeDisplay(e, display) {
  let isNr = e.target.id;
  console.log(!parseInt(isNr));
  if ((sum === 0 && !parseInt(isNr)) || sum.length == 11) return;
  if (
    (operator === "" && parseInt(isNr)) ||
    (operator === "" && isNr === "0")
  ) {
    a = parseInt(`${a}${isNr}`);
    sum = a;
    display.textContent = sum;
  } else if (!parseInt(isNr) && operator === "") {
    operator = e.target.id;
    sum = `${a}${operator}`;
    display.textContent = sum;
  } else if (parseInt(isNr) || (b !== "" && isNr === "0")) {
    b = parseInt(`${b}${e.target.id}`);
    sum = `${a}${operator}${b}`;
    display.textContent = sum;
  }
  console.log("a: " + a);
  console.log("operator: " + operator);
  console.log("b: " + b);
}

function operate(a, b, operator) {
  let sum = 0;
  switch (operator) {
    case _ADD:
      sum = add(a, b);
      break;
    case _SUBTRACT:
      sum = subtract(a, b);
      break;
    case _MULTIPLY:
      sum = multiply(a, b);
      break;
    case _DIVIDE:
      sum = divide(a, b);
      break;
  }
  return sum;
}

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) return "You bastard! Trying to break me EEEeeeeyyy!!!.......";
  return a / b;
}

console.log(operate(2, 5, "+"));
console.log(operate(2, 5, "-"));
console.log(operate(2, 5, "*"));
console.log(operate(2, 5, "/"));
console.log(operate(2, 0, "/"));
