# Classes and Object-Oriented Programming Concepts Cheat Sheet

## Table of Contents

- [Classes](#classes)
- [Inheritance](#inheritance)
- [Polymorphism](#polymorphism)
- [Encapsulation](#encapsulation)
- [Abstraction](#abstraction)

<a name="classes"></a>

## Classes

Classes are templates for creating objects in TypeScript, using an object-oriented approach. They define the structure, properties, and methods of objects.

```typescript
class ClassName {
  // Define properties
  property: Type;

  // Define constructor
  constructor(args) {
    // Initialize properties
  }

  // Define methods
  methodName(): ReturnType {
    // Method implementation
  }
}

// Create a new instance of ClassName
const instance = new ClassName(args);
```

<a name="inheritance"></a>

## Inheritance

Inheritance is when a class can inherit properties and methods from another class. The `extends` keyword is used to derive a class from another class.

```typescript
class DerivedClass extends BaseClass {
  // Define additional properties and methods
}
```

<a name="polymorphism"></a>

## Polymorphism

Polymorphism allows using objects of different classes through a common interface. It can be achieved through interface implementation or method overriding.

```typescript
interface CommonInterface {
  sharedMethod(): any;
}

class ClassA implements CommonInterface {
  sharedMethod() {
    // Implementation for ClassA
  }
}

class ClassB implements CommonInterface {
  sharedMethod() {
    // Implementation for ClassB
  }
}
```

<a name="encapsulation"></a>

## Encapsulation

Encapsulation is the concept of bundling data and methods operating on that data within a single unit (class). Access modifiers control the visibility and accessibility of class properties and methods.

```typescript
class EncapsulationExample {
  // Access modifiers: public, private, protected
  private data: number;

  constructor(data: number) {
    this.data = data;
  }

  public getData(): number {
    return this.data;
  }

  public setData(data: number): void {
    this.data = data;
  }
}
```

<a name="abstraction"></a>

## Abstraction

Abstraction is the process of providing only essential information and hiding their background details or implementation. Use abstract classes and methods to define common interfaces for subclasses.

```typescript
abstract class AbstractClass {
  abstract abstractMethod(): any;

  commonMethod() {
    // Common implementation
  }
}

class ConcreteClass extends AbstractClass {
  abstractMethod() {
    // Implementation for ConcreteClass
  }
}
```
