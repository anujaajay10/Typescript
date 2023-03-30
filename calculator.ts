function add(num1: number, num2: number): number {
    return num1 + num2;
  }
  
  function subtract(num1: number, num2: number): number {
    return num1 - num2;
  }
  
  function multiply(num1: number, num2: number): number {
    return num1 * num2;
  }
  
  function divide(num1: number, num2: number): number {
    if (num2 === 0) {
      throw new Error("Cannot divide by zero.");
    }
    return num1 / num2;
  }
  
  function calculate(): void {
    const num1 = Number(prompt("Enter the first number:"));
    const num2 = Number(prompt("Enter the second number:"));
    const operator = prompt("Enter the operation (+, -, *, /):");
    
    let result: number;
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
    
    console.log(`The result of ${num1} ${operator} ${num2} is ${result}.`);
  }
  
  // Example usage
  calculate();
  