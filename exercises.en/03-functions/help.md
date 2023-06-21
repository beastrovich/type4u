# Functions and Function Types

1. Functions in TypeScript

- A function is a reusable piece of code that performs a specific task
- Enforce type safety and improve code maintainability

2. Defining Functions

- Declare functions with the `function` keyword, followed by the function name and parameters

  ```typescript
  function functionName(param1: type, param2: type): returnType {
    // function body
  }
  ```

3. Function Types

- Define a function signature to specify the expected types of function parameters and return value

  ```typescript
  type FunctionSignature = (param1: type, param2: type) => returnType;
  ```

4. Arrow Functions

- Alternative syntax for writing functions, often used for shorter and more concise expressions

  ```typescript
  const arrowFunction = (param1: type, param2: type): returnType => {
    // function body
  };
  ```

5. Optional and Default Parameters

- Mark parameters as optional with a question mark (`?`) or provide a default value with an equal sign (`=`)

  ```typescript
  function optionalAndDefault(
    param1?: type,
    param2: type = defaultValue
  ): returnType {
    // function body
  }
  ```

6. Function Overloading

- Provide multiple function signatures for a single function to support different parameter types and counts

  ```typescript
  function overloadedFunction(param1: type1): returnType;
  function overloadedFunction(param1: type2, param2: type2): returnType;
  function overloadedFunction(param1: any, param2?: any): any {
    // function body
  }
  ```
