# Type Inference and Type Compatibility

- Type inference: TypeScript automatically infers the type of a variable or expression when no explicit type annotation is provided.

```typescript
let myNumber = 5; // TypeScript infers the type of myNumber as number
```

- Variable type inference: When initializing a variable without explicitly providing a type, TypeScript infers the type based on the value assigned to it.

```typescript
let myString = 'hello'; // TypeScript infers the type of myString as string
```

- Return type inference: TypeScript can infer the return type of a function based on the value returned in its body.

```typescript
function add(a: number, b: number) {
  return a + b; // TypeScript infers the return type as number
}
```

- Contextual typing: TypeScript can infer types based on the context in which a value is used. Common examples include event handlers and array literals.

```typescript
document.addEventListener('click', (event) => {
  // TypeScript infers type of event as MouseEvent
  console.log(event.clientX);
});

const myNumbers = [1, 2, 3]; // TypeScript infers type of myNumbers as number[]
```

- Type compatibility: TypeScript checks if a type is compatible with another type based on their structure, not their names. Types are considered compatible if they have the same properties and methods.

```typescript
interface Person {
  name: string;
  age: number;
}

const person1: Person = { name: 'Alice', age: 30 }; // Valid assignment
const person2 = { name: 'Bob', age: 20, location: 'NYC' }; // Extra property (location)

const p: Person = person2; // Valid assignment, TypeScript checks structure compatibility
```

Remember to leverage TypeScript's type inference to reduce the need for explicit type annotations while maintaining type safety in your code.
