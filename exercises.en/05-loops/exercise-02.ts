// DO NOT CHANGE THE IMPORTS
import { expect } from 'chai';

// I AM NOT DONE

function sumEvenNumbers(numbers): number {
  let sum = 0;

  for (let number of numbers) {
    // ???
  }

  return sum;
}

// DO NOT CHANGE THE CODE BELOW
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sumEvenNumbers(myNumbers));

// not important
export {};

class Tests {
  @Test()
  [`sumEvenNumbers(myNumbers)`]() {
    expect(sumEvenNumbers(myNumbers)).eq(20);
  }
}
