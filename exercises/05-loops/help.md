# Loops and Iteration

Loops and iteration are essential components of TypeScript programming, allowing you to iterate over arrays or perform repetitive tasks using loops.

## For Loop

The `for` loop is a basic loop structure that iterates a specified number of times:

```typescript
for (let i = 0; i < 5; i++) {
  console.log('Iteration ' + i);
}
```

## While Loop

The `while` loop checks a condition at the beginning of each iteration and continues until the condition is false:

```typescript
let i = 0;
while (i < 5) {
  console.log('Iteration ' + i);
  i++;
}
```

## Do-While Loop

The `do-while` loop checks the condition at the end of each iteration and continues until the condition is false:

```typescript
let i = 0;
do {
  console.log('Iteration ' + i);
  i++;
} while (i < 5);
```

## For-Of Loop

The `for-of` loop is used to iterate over the values of an iterable object (e.g., Array, Set, or Map entries). This loop is especially useful in TypeScript for iterating over an array:

```typescript
const array = [1, 2, 3, 4, 5];
for (const item of array) {
  console.log('Item: ' + item);
}
```

## For-In Loop

The `for-in` loop is primarily used to iterate over the enumerable properties (keys) of an object:

```typescript
const obj = { key1: 'value1', key2: 'value2', key3: 'value3' };
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log('Key: ' + key + ', Value: ' + obj[key]);
  }
}
```

Remember to use these looping and iteration constructs when working with TypeScript to make your code more efficient and adaptable.
