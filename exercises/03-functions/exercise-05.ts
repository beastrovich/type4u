// NE MIJENJAJTE IMPORT-e
import { expect } from 'chai';

// I AM NOT DONE

function pozdrav(ime: string): string;
function pozdrav(pozdrav: string, ime: string): string;

// Popravi funkciju ispod
function pozdrav(imeIliPozdrav: string, ime: string) {
  return imeIliPozdrav + ', ' + ime;
}

// NE MIJENJAJ KOD ISPOD
console.log(pozdrav('John')); // Trebalo bi ispisati "Hello, John"
console.log(pozdrav('Dobro jutro', 'Jane')); // Trebalo bi ispisati "Dobro jutro, Jane"

class Testovi {
  @Test()
  [`pozdrav('John')`]() {
    expect(pozdrav('John')).eq('Hello, John');
  }

  @Test()
  [`pozdrav('Dobro jutro', 'Jane')`]() {
    expect(pozdrav('Dobro jutro', 'Jane')).eq('Dobro jutro, Jane');
  }
}

export {};
