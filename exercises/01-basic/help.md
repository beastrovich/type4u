# TypeScript - Osnovna sintaksa i vrste podataka

1. Osnovna sintaksa:

- Koristite `const`, `let` ili `var` za deklariranje varijabli
- Dodijelite vrijednosti pomoću operatora `=`
- Izjave završavaju s točkom-zarezom (`;`)
- Komentari: Jednolinijski (`//`) i Višelinijski (`/* ... */`)

2. Vrste podataka:

- `boolean`: true ili false
- `number`: Sve numeričke vrijednosti (cjelobrojne i decimalne)
- `string`: Tekstualni podaci
- `array`: Niz vrijednosti, označen s `T[]` ili `Array<T>`
- `tuple`: Niz fiksne veličine s različitim vrstama, npr., `[number, string]`
- `enum`: Struktura podataka s mogućnostima nabrajanja
- `void`: Predstavlja nedefiniranu vrstu (uobičajeno za funkcije bez povratnih vrijednosti)
- `null`: Predstavlja odsutnost objekta ili vrijednosti
- `undefined`: Predstavlja varijablu kojoj nije dodijeljena vrijednost
- `any`: Može predstavljati bilo koju vrstu podataka
- `unknown`: Slično kao `any`, ali manje dopustljivo
- `never`: Predstavlja vrijednost koja se nikad ne događa (npr., funkcija koja uvijek izaziva pogrešku)

3. Označavanje tipova:

- Eksplicitno deklarirajte tipove varijabli, npr., `let imeVarijable: vrstaPodataka;`
- Primjeri:
  ```ts
  let isDone: boolean = false;
  let age: number = 25;
  let name: string = 'John';
  ```
