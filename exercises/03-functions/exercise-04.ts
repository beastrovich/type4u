//- I AM NOT DONE

function processArray(nums: number[], callbackFunction) {
  const result: any[] = [];

  for (let i = 0; i < nums.length; i++) {
    result.push(callbackFunction(nums[i]));
  }

  console.log(`Processed array: ${result}`);
  return result;
}

// DO NOT CHANGE THE CODE BELOW
type Callback = (num: number) => number;

function square(x: number): number {
  return x * x;
}

const myArray: number[] = [1, 2, 3, 4, 5];
processArray(myArray, square);

// not important
export {};
