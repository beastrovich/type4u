// I AM NOT DONE

// DO NOT CHANGE THIS TYPE
type Person = {
  name: string;
  age: number;
};

// DO NOT CHANGE THIS VALUE
const person: Person = {
  name: 'Alice',
  age: 28,
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// not important
export {};
