// NE MIJENJAJTE IMPORT-e
import { expect } from 'chai';

function izračunajOcjenu(postotak: number) {
  const ocjena: string;

  if (postotak >= 90) {
    ocjena = 'A';
  } else if (postotak >= 80) {
    ocjena = 1;
  } else if (postotak >= 70) {
    ocjena = 'C';
  } else if (postotak >= 50) {
    ocjena = 'D';
  } else {
    ocjena = 'F';
  }

  return ocjena;
}

// NE MIJENJAJ ISPOD KODA
console.log(`Ocjena(76): ${izračunajOcjenu(76)}`);
console.log(`Ocjena(85): ${izračunajOcjenu(85)}`);

class Testovi {
  @Test()
  [`izračunajOcjenu(76)`]() {
    expect(izračunajOcjenu(76)).eq('C');
  }

  @Test()
  [`izračunajOcjenu(85)`]() {
    expect(izračunajOcjenu(85)).eq('B');
  }
}

// nije važno
export {};
