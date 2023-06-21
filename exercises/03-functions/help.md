# Funkcije i vrste funkcija

1. Funkcije u TypeScriptu

- Funkcija je ponovno upotrebljiv komad koda koji izvršava specifični zadatak
- Osigurava tip sigurnosti i poboljšava održivost koda

2. Definiranje funkcija

- Funkcije se deklariraju s ključnom riječi `function`, slijedi ime funkcije i parametri

  ```typescript
  function imeFunkcije(param1: tip, param2: tip): povratniTip {
    // tijelo funkcije
  }
  ```

3. Vrste funkcija

- Definirajte potpis funkcije da biste naveli očekivane vrste parametara funkcije i povratne vrijednosti

  ```typescript
  type PotpisFunkcije = (param1: tip, param2: tip) => povratniTip;
  ```

4. Arrow funkcije

- Alternativna sintaksa za pisanje funkcija, često se koristi za kraće i konciznije izraze

  ```typescript
  const arrowFunkcija = (param1: tip, param2: tip): povratniTip => {
    // tijelo funkcije
  };
  ```

5. Opcionalni i zadani parametri

- Označite parametre kao opcionalne s upitnikom (`?`) ili pružite zadanu vrijednost s jednakosnim znakom (`=`)

  ```typescript
  function opcionalniIDefault(
    param1?: tip,
    param2: tip = defaultVrijednost
  ): povratniTip {
    // tijelo funkcije
  }
  ```

6. Preopterećenje funkcija

- Priložite više potpisa funkcija za jednu funkciju kako biste podržali različite vrste i brojeve parametara

  ```typescript
  function preopterećenaFunkcija(param1: tip1): povratniTip;
  function preopterećenaFunkcija(param1: tip2, param2: tip2): povratniTip;
  function preopterećenaFunkcija(param1: any, param2?: any): any {
    // tijelo funkcije
  }
  ```
