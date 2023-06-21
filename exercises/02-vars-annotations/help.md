# Variable Declarations and Type Annotations

1. Variable declarations using `let` and `const`:

- Use `let` for mutable variables: `let age: number = 30;`
- Use `const` for immutable constants: `const pi: number = 3.14;`

2. Basic type annotations:

- Number: `let num: number = 42;`
- String: `let str: string = 'hello';`
- Boolean: `let isValid: boolean = true;`

3. Array type annotations:

- Use `T[]` for arrays of type `T`: `let nums: number[] = [1, 2, 3];`
- Use `Array<T>` for arrays of type `T`: `let strs: Array<string> = ['a', 'b', 'c'];`

4. Tuple type annotations:

- Use `[T1, T2, ...]` for tuples: `let tuple: [string, number] = ['age', 30];`

5. Enum type annotations:

- Use `enum` keyword to define:
  ```
  enum Color {
    Red,
    Green,
    Blue
  }
  let myColor: Color = Color.Red;
  ```

6. Type inference:

- TypeScript infers the type automatically: `let autoType = 'hello';` (string)

7. Any type:

- Use `any` type if the specific type is unknown or can change: `let unknownType: any = 42;`

8. Void, Null, and Undefined types:

- Void: used for functions with no return value: `function logMessage(): void { console.log('Message'); }`
- Null: for nullable types: `let nullableVar: number | null = null;`
- Undefined: for undefined values: `let undefVar: number | undefined = undefined;`

9. Type aliases:

- Use `type` keyword to create type aliases: `type UserID = number | string;`

10. Type assertions:

- Use `as T` or `<T>` to assert type: `let value: any = "string value"; let strValue: string = value as string;`
- Use `is` keyword for custom type guards: `function isNumber(value: any): value is number { return typeof value === 'number'; }`
