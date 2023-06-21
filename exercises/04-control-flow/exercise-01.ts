// NE MIJENJAJTE IMPORT-e
import { expect } from 'chai';

function kojiJeDan(dan: Dan) {
  switch (dan) {
    case 'Ponedjeljak':
      return 1;
    case 'Utorak':
      return 'Danas je utorak';
    case 'Srijeda':
      return 'Danas je srijeda';
    case 'Četvrtak':
      return 'Danas je četvrtak';
    case 'Petak':
      return 'Danas je petak';
    case 'Subota':
      return 'Danas je subota';
    case 'Nedjelja':
      return 'Danas je nedjelja';
  }
}

// NE MIJENJAJTE KOD ISPOD
type Dan =
  | 'Ponedjeljak'
  | 'Utorak'
  | 'Srijeda'
  | 'Četvrtak'
  | 'Petak'
  | 'Subota'
  | 'Nedjelja';

console.log(kojiJeDan('Ponedjeljak')); // trebalo bi ispisati "Danas je ponedjeljak"

class Tests {
  @Test()
  [`outputDay('Ponedjeljak')`]() {
    expect(kojiJeDan('Ponedjeljak')).eq('Danas je ponedjeljak');
  }
}

// nebitno
export {};
