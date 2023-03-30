function findMax(numbers: number[]): number {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
    return max;
  }
  
const numbers = [5, 2, 9, 3, 6];
const max = findMax(numbers);
console.log(`The maximum value in ${numbers} is ${max}.`);
