class Calculator {
  constructor(previousOperandText, currentOperandText) {
    this.previousOperandText = previousOperandText;
    this.currentOperandText = currentOperandText;
    this.clearAll();
  }
  clearAll() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operator = undefined;
    this.updateDisplay();
  }

  delete() {
    this.currentOperand = this.currentOperand
      .toString()
      .slice(0, this.currentOperand.length - 1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
    this.updateDisplay();
  }

  chooseOperator(operator) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operator = operator;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let compute;
    let prev = parseFloat(this.previousOperand);
    let current = parseFloat(this.currentOperand);
    switch (this.operator) {
      case "+":
        compute = prev + current;
        break;
      case "-":
        compute = prev - current;
        break;
      case "*":
        compute = prev * current;
        break;
      case "÷":
        compute = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = compute;
    this.operator = undefined;
    this.previousOperand = "";
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    console.log(stringNumber);
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    console.log(integerDigits);
    const decimalDigits = stringNumber.split(".")[1];
    console.log(decimalDigits);
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentOperandText.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    if (this.operator != null) {
      this.previousOperandText.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operator}`;
    } else {
      this.previousOperandText.innerText = "";
    }
  }
}
