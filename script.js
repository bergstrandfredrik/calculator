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
  btn.addEventListener("click", (e) => setNumber(e, display))
);

const operateBtns = document.querySelectorAll(".operate-btn");

console.log(operateBtns);
operateBtns.forEach((opBtn) =>
  opBtn.addEventListener("click", (e) => setOperator(e, display))
);

const enterBtn = document
  .querySelector("#enter")
  .addEventListener("click", () => getSum(display));

const clearBtn = document
  .querySelector("#clear")
  .addEventListener("click", () => clearDisplay(display));

function getSum(display) {
  if (b === "") return;

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

function setNumber(e, display) {
  if (!Boolean(operator)) {
    a = parseInt(`${a}${e.target.id}`);
    sum = a;
  } else {
    b = parseInt(`${b}${e.target.id}`);
    sum = `${sum}${b}`;
  }
  display.textContent = sum;
}

function setOperator(e, display) {
  if (Boolean(operator) && !isNaN(b)) {
    let value = operate(a, b, operator);
    operator = e.target.id;
    sum = `${value}${operator}`;
    a = value;
    b = "";
  } else {
    a = Number.parseInt(a) ? a : 0;
    operator = e.target.id;
    sum = `${a}${operator}`;
  }
  display.textContent = sum;
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
  if (b === 0) return "don't break me!";
  let divSum = a / b;
  return divSum.toFixed(2);
}
