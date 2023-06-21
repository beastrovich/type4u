# Kontrolne naredbe tijeka

1. if...else naredba:

- Donosite odluke na temelju uvjeta.
- Sintaksa:
  ```typescript
  if (uvjet) {
    // kod se izvršava kada je uvjet istinit
  } else {
    // kod se izvršava kada je uvjet netočan
  }
  ```

2. else if naredba:

- Procjenjuju se višestruki uvjeti u nizu.
- Sintaksa:
  ```typescript
  if (uvjet1) {
    // kod se izvršava kada je uvjet1 istinit
  } else if (uvjet2) {
    // kod se izvršava kada je uvjet1 netočan i uvjet2 je istinit
  } else {
    // kod se izvršava kada niti jedan uvjet nije istinit
  }
  ```

3. switch...case naredba:

- Izvršava različite blokove koda na temelju višestrukih uvjeta.
- Sintaksa:
  ```typescript
  switch (izraz) {
    case vrijednost1:
      // kod se izvršava kada je izraz jednak vrijednosti1
      break;
    case vrijednost2:
      // kod se izvršava kada je izraz jednak vrijednosti2
      break;
    default:
      // kod se izvršava kada se niti jedan slučaj ne podudara
      break;
  }
  ```

4. ternarni operator:

- Skraćuje jednostavne if...else naredbe za bolju čitljivost.
- Sintaksa:
  ```typescript
  uvjet ? izrazAkoIstinit : izrazAkoNetočan;
  ```

Zapamtite:

- Kontrolne naredbe tijeka pomažu stvaranju fleksibilnih i dinamičkih programa omogućujući uvjetno izvršavanje blokova koda.
- Razmotrite čitljivost i održivost koda prilikom odabira kontrolne naredbe tijeka za vaš slučaj upotrebe.
