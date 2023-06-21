// I AM NOT DONE

function formatirajIme(punoIme: { prvo: string; zadnje: string }): string {
  return `${punoIme.ime} ${punoIme.prezime}`;
}

// DO NOT CHANGE THE CODE BELOW
const osoba = {
  ime: 'John',
  prezime: 'Doe',
};

console.log(formatirajIme(osoba)); // Trebalo bi pisati "John Doe"

// not important
export {};
