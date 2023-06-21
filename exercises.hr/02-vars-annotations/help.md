# Deklaracije varijabli i anotacije tipova

1. Deklaracija varijabli koristeći `let` i `const`:

- Koristite `let` za promjenjive varijable: `let age: number = 30;`
- Koristite `const` za nepromjenjive konstante: `const pi: number = 3.14;`

2. Osnovne anotacije tipova:

- Broj: `let num: number = 42;`
- String: `let str: string = 'hello';`
- Boolean: `let isValid: boolean = true;`

3. Anotacije tipova za nizove:

- Koristite `T[]` za nizove tipa `T`: `let nums: number[] = [1, 2, 3];`
- Koristite `Array<T>` za nizove tipa `T`: `let strs: Array<string> = ['a', 'b', 'c'];`

4. Anotacije tipova za tuple:

- Koristite `[T1, T2, ...]` za tuple: `let tuple: [string, number] = ['age', 30];`

5. Anotacije tipova za enumeracije:

- Koristite ključnu riječ `enum` za definiranje:
  ```
  enum Color {
    Red,
    Green,
    Blue
  }
  let myColor: Color = Color.Red;
  ```

6. Zaključivanje tipa:

- TypeScript automatski zaključuje tip: `let autoType = 'hello';` (string)

7. Bilo koji tip:

- Koristite tip `any` ako je određeni tip nepoznat ili se može mijenjati: `let unknownType: any = 42;`

8. Tipovi Void, Null i Undefined:

- Void: koristi se za funkcije bez povratne vrijednosti: `function logMessage(): void { console.log('Poruka'); }`
- Null: za nullable tipove: `let nullableVar: number | null = null;`
- Undefined: za nedefinirane vrijednosti: `let undefVar: number | undefined = undefined;`

9. Alijasi tipova:

- Koristite ključnu riječ `type` za stvaranje alijasa tipova: `type UserID = number | string;`

10. Potvrde tipova:

- Koristite `as T` ili `<T>` za potvrdu tipa: `let value: any = "string value"; let strValue: string = value as string;`
- Koristite ključnu riječ `is` za prilagođene zaštitnike tipova: `function isNumber(value: any): value is number { return typeof value === 'number'; }`
