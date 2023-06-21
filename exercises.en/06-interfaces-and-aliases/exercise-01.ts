// I AM NOT DONE

interface Person {
  firstName: sting;
  lastName: number;
  age: string;
}

function printPersonInfo(person: any): void {
  console.log(
    `Name: ${person.firstname} ${person.lastName}, Age: ${person.age} years`
  );
}

const person: Person = {
  firstname: 'John',
  lastName: 'Doe',
  age: 24,
};

printPersonInfo(person);

// not important
export {};
