let numberButton = document.querySelectorAll("[data-number]");
let operatorButton = document.querySelectorAll("[data-operator]");
let equalButton = document.querySelector("[data-equals]");
let deleteButton = document.querySelector("[data-delete]");
let clearAllButton = document.querySelector("[data-clear-all]");
let currentOperandText = document.querySelector("[data-current-operand");
let previousOperandText = document.querySelector("[data-previous-operand]");

let calculator = new Calculator(previousOperandText, currentOperandText);

numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operatorButton.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperator(button.innerText);
    calculator.updateDisplay();
  });
});

clearAllButton.addEventListener("click", () => {
  calculator.clearAll();
  calculator.updateDisplay();
});

equalButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
