# 10. Error Handling and Exceptions Cheat Sheet

This cheat sheet covers the basics of error handling and exceptions in TypeScript.

## Catching and Handling Errors

Use `try`, `catch`, and `finally` blocks to catch and handle errors gracefully.

```typescript
try {
  // Code that might throw an error
} catch (error) {
  // Handle the error
} finally {
  // Code that runs whether an error is thrown or not
}
```

## Checking Error Instances

Determine if an error is an instance of a specific error type using `instanceof`.

```typescript
try {
  // Code that might throw a custom error
} catch (error) {
  if (error instanceof CustomError) {
    // Handle the custom error
  } else {
    // Handle other errors
  }
}
```

## Throwing Errors

Throw custom or built-in errors using the `throw` keyword.

```typescript
if (/* Some condition */) {
  throw new Error('An error occurred');
}
```

## Custom Errors

Create custom error classes by extending the built-in `Error` class.

```typescript
class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CustomError';
    // Set the prototype explicitly, for compatibility with older environments
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

// Usage
throw new CustomError('An error occurred');
```

## Assertion Functions

Use assertion functions to validate input, ensuring it conforms to expected types or conditions.

```typescript
function assert(condition: any, message?: string): asserts condition {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

// Usage
assert(value !== null, 'The value is null');
```

## Result Types

Represent the success or failure of a function by wrapping the return value in an object or a special type.

```typescript
type Result<T> =
  | { isSuccess: true; value: T }
  | { isSuccess: false; error: Error };

function divide(a: number, b: number): Result<number> {
  if (b === 0) {
    return { isSuccess: false, error: new Error('Cannot divide by zero') };
  }
  return { isSuccess: true, value: a / b };
}

// Usage
const result = divide(10, 2);
if (result.isSuccess) {
  console.log('Result:', result.value);
} else {
  console.error('Error:', result.error);
}
```

Remember to handle errors and exceptions in your code to improve user experience and maintain code stability.
