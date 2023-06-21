// I AM NOT DONE

function procesirajNiz(brojevi: number[], povratnaFunkcija) {
  const rezultat: any[] = [];

  for (let i = 0; i < brojevi.length; i++) {
    rezultat.push(povratnaFunkcija(brojevi[i]));
  }

  console.log(`Procesirani niz: ${rezultat}`);
  return rezultat;
}

// NE MIJENJAJTE KOD ISPOD
type PovratniPoziv = (broj: number) => number;

function kvadrat(x: number): number {
  return x * x;
}

const mojNiz: number[] = [1, 2, 3, 4, 5];
procesirajNiz(mojNiz, kvadrat);

// nebitno
export {};
