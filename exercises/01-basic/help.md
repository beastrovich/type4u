# TypeScript - Basic Syntax and Data Types

1. Basic Syntax:

- Use `const`, `let`, or `var` to declare variables
- Assign values with the `=` operator
- Statements end with a semicolon (`;`)
- Comments: Single-line (`//`) and Multi-line (`/* ... */`)

2. Data Types:

- `boolean`: true or false
- `number`: All numeric values (integers and floating-point)
- `string`: Textual data
- `array`: Array of values, denoted by `T[]` or `Array<T>`
- `tuple`: Fixed-size array with different types, e.g., `[number, string]`
- `enum`: Enumerable data structure
- `void`: Represents no type (common for functions without return values)
- `null`: Represents an absence of an object or value
- `undefined`: Represents a variable not assigned yet
- `any`: Can represent any data type
- `unknown`: Like `any`, but less permissive
- `never`: Represents a value that never occurs (e.g., a function that always throws an error)

3. Type Annotations:

- Declare variables' types explicitly, e.g., `let variableName: dataType;`
- Examples:
  ```
  let isDone: boolean = false;
  let age: number = 25;
  let name: string = 'John';
  ```
