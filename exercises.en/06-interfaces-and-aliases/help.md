# Interfaces and Type Aliases

## Interfaces

- Define contracts and enforce object shape for better code organization and reusability.
- Useful for describing objects, their properties, and their methods.
- Interfaces are used to ensure that objects have certain required properties and methods.
- Create an interface with the `interface` keyword followed by a name.

```typescript
interface Example {
  propA: string;
  propB: number;
  methodA(): void;
}
```

## Implementing Interfaces

- Adopt an interface in a class using the `implements` keyword.

```typescript
class MyClass implements Example {
  propA: string;
  propB: number;

  constructor(propA: string, propB: number) {
    this.propA = propA;
    this.propB = propB;
  }

  methodA(): void {
    console.log(`${this.propA} has the value ${this.propB}`);
  }
}
```

## Type Aliases

- Give a custom, descriptive name to an existing TypeScript type.
- Use the `type` keyword followed by the alias name and the type definition.

```typescript
type AliasExample = {
  propA: string;
  propB: number;
};
```

## Union Types

- Define a type that can be one of multiple types.
- Use the `|` (pipe) character to specify additional types.

```typescript
type UnionExample = Example | AliasExample;
```

## Intersection Types

Intersection types are a way to combine multiple types into one. This allows you to create a new type that includes all the properties and methods from the combined types. In TypeScript, you can use the `&` (ampersand) character to specify intersection types.

Here's an example of using intersection types:

```typescript
// Define two interfaces
interface Identification {
  id: string;
}

interface Label {
  label: string;
}

// Create an intersection type that includes properties from both interfaces
type IdentifiableLabel = Identification & Label;

// Create an object of the intersection type
const myObject: IdentifiableLabel = {
  id: '1',
  label: 'My Label',
};
```

In this example, an intersection type called `IdentifiableLabel` is created, which combines the properties from `Identification` and `Label` interfaces. The object `myObject` has both `id` and `label` properties, and its type is `IdentifiableLabel`.

## Difference between Interfaces and Type Aliases

- Interfaces can be merged by having multiple interfaces with the same name.
- Type aliases cannot be merged, and any reassignment will result in a compile-time error.
- Interfaces can be implemented by classes, while type aliases cannot.
- Type aliases can represent any type, such as union types and primitive types, while interfaces cannot represent primitive types.
