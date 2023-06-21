// I AM NOT DONE

type Korisnik = {
  id: number;
  korisničkoIme: string;
  ePošta: str;
  ime: string;
  prezime: string;
  objave: Array<Number>;
  prijavljen: Bool;
};

// NE MIJENJAJTE DONJI KOD
const korisnik: Korisnik = {
  id: 1,
  korisničkoIme: 'johndoe',
  ePošta: 'john@example.com',
  ime: 'John',
  prezime: 'Doe',
  objave: [1, 2, 3, 4, 5],
  prijavljen: true,
};

// u oblikovanom nizu zapišite gore navedene informacije
console.log(
  `Korisnik ${korisnik.korisničkoIme} (${korisnik.ePošta}) je ${
    korisnik.prijavljen ? 'prijavljen' : 'nije prijavljen'
  }` +
    ` i ima ${korisnik.objave.length} objava.` +
    ` Njegovo/je ime je ${korisnik.ime} ${korisnik.prezime}.` +
    ` Njegov/Ostv nalog ima id ${korisnik.id}.`
);
