/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

let currentTime = new Date();
let year = currentTime.getFullYear();
let month = 1 + currentTime.getMonth();
let day = currentTime.getDate();
let birthyear = 1992;
let birthmonth = 3;
let birthday= 19;



var dayDiff = day - birthday;
var monthDiff = month - birthmonth;
var yearDiff = year - birthyear;
//console.log(dayDiff);
//console.log(monthDiff);
//console.log(yearDiff);


if (monthDiff < 0 && dayDiff < 0) {
  yearDiff = yearDiff - 1;
  monthDiff = 11 + monthDiff;
  dayDiff = 30 + dayDiff;
  console.log(`Hai ${yearDiff} anni, ${monthDiff} mesi e ${dayDiff} giorni`);
} else if (monthDiff == 0 && dayDiff < 0) {
  yearDiff = yearDiff - 1;
  monthDiff = 11;
  dayDiff = 30 + dayDiff;
  console.log(`Hai ${yearDiff} anni, ${monthDiff} mesi e ${dayDiff} giorni`);
} else if (monthDiff < 0) {
  yearDiff = yearDiff - 1;
  monthDiff = 12 + monthDiff;
  console.log(`Hai ${yearDiff} anni, ${monthDiff} mesi e ${dayDiff} giorni`);
} else if (dayDiff < 0) {
  monthDiff = monthDiff - 1;
  dayDiff = 30 + dayDiff;
  console.log(`Hai ${yearDiff} anni, ${monthDiff} mesi e ${dayDiff} giorni`);
} else {
  console.log(`Hai ${yearDiff} anni, ${monthDiff} mesi e ${dayDiff} giorni`);
}
 
console.log(`Siamo nel ${year} e ti mancano ${100 - (year - birthyear)} anni circa per arrivare a 100`);