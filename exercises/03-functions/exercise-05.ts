// DO NOT CHANGE THE IMPORTS
import { expect } from 'chai';

//- I AM NOT DONE

function greet(name: string): string;
function greet(greeting: string, name: string): string;

// Fix the function below
function greet(nameOrGreeting: string, name: string) {
  return nameOrGreeting + ', ' + name;
}

// DO NOT CHANGE THE CODE BELOW
console.log(greet('John')); // Should output "Hello, John"
console.log(greet('Good morning', 'Jane')); // Should output "Good morning, Jane"

class Tests {
  @Test()
  [`greet('John')`]() {
    expect(greet('John')).eq('Hello, John');
  }

  @Test()
  [`greet('Good morning', 'Jane')`]() {
    expect(greet('Good morning', 'Jane')).eq('Good morning, Jane');
  }
}

// not important
export {};
