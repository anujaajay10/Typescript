function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    if (num2 === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return num1 / num2;
}
function calculate() {
    var num1 = Number(prompt("Enter the first number:"));
    var num2 = Number(prompt("Enter the second number:"));
    var operator = prompt("Enter the operation (+, -, *, /):");
    var result;
    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            throw new Error("Invalid operation.");
    }
    console.log("The result of ".concat(num1, " ").concat(operator, " ").concat(num2, " is ").concat(result, "."));
}
// Example usage
calculate();
