# Control Flow Statements

1. if...else statement:

- Make decisions based on a condition.
- Syntax:
  ```typescript
  if (condition) {
    // code executed when condition is true
  } else {
    // code executed when condition is false
  }
  ```

2. else if statement:

- Evaluate multiple conditions in a sequence.
- Syntax:
  ```typescript
  if (condition1) {
    // code executed when condition1 is true
  } else if (condition2) {
    // code executed when condition1 is false and condition2 is true
  } else {
    // code executed when none of the conditions are true
  }
  ```

3. switch...case statement:

- Execute different code blocks based on multiple conditions.
- Syntax:
  ```typescript
  switch (expression) {
    case value1:
      // code executed when expression is equal to value1
      break;
    case value2:
      // code executed when expression is equal to value2
      break;
    default:
      // code executed when none of the cases match
      break;
  }
  ```

4. ternary operator:

- Shorten simple if...else statements for readability.
- Syntax:
  ```typescript
  condition ? expressionIfTrue : expressionIfFalse;
  ```

Remember:

- Control flow statements help to create flexible and dynamic programs by allowing conditional execution of code blocks.
- Consider code readability and maintainability when choosing a control flow statement for your use case.
