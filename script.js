const _ADD = "+";
const _SUBTRACT = "-";
const _MULTIPLY = "*";
const _DIVIDE = "/";

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

console.log(operate(2, 5, "+"));
console.log(operate(2, 5, "-"));
console.log(operate(2, 5, "*"));
console.log(operate(2, 5, "/"));
console.log(operate(2, 0, "/"));
