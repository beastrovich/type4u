// I AM NOT DONE

function formatName(name: { first: string; last: string }): string {
  return `${name.firstName} ${name.lastName}`;
}

// DO NOT CHANGE THE CODE BELOW
const person = {
  firstName: 'John',
  lastName: 'Doe',
};

console.log(formatName(person)); // Should output "John Doe"

// not important
export {};
