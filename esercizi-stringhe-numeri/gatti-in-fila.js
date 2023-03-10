/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/


let cats = 21;
let cats_row = 3;

let resulting_rows = Math.ceil(cats / cats_row);
let cats_missing = (resulting_rows * cats_row) - cats;


console.log(`Hai ${cats} gatti con ${cats_row} gatti per fila.`);
console.log(`Avrai ${resulting_rows} file di gatti.`);
 if (cats_missing > 0) {
  console.log(`Ti mancano ${cats_missing} gatti per completare la fila N° ${resulting_rows}.`
)};

