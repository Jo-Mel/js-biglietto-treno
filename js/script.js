// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65

// var eta = parseInt(prompt('Inserisci la tua età'));
// var km = parseInt(prompt('Inserisci i kilometri che desideri percorrere'));
// var prezzoStandard = km * 0.21;

// // il prezzo scontato del 20% per gli under 18
// var prezzoUnder = prezzoStandard * 0.8;
// // il prezzo scontato del 40% per gli over 65
// var prezzoOver = prezzoStandard * 0.6;


// if (eta < 18) {
    
//     document.getElementById('under').innerHTML = 'Totale del tuo biglietto: €' + prezzoUnder;
// } else if (eta > 65) {
   
//     document.getElementById('over').innerHTML = 'Totale del tuo biglietto: €' + prezzoOver;
// } else {
//     document.getElementById('standard').innerHTML = 'Totale del tuo biglietto: €' + prezzoStandard;
// }

// *** variante

var eta = parseInt(prompt('Inserisci la tua età'));
var km = parseInt(prompt('Inserisci i kilometri che desideri percorrere'));
var prezzoStandard = km * 0.21;

// il prezzo scontato del 20% per gli under 18
var prezzoUnder = prezzoStandard * 0.8;
// il prezzo scontato del 40% per gli over 65
var prezzoOver = prezzoStandard * 0.6;
var tot;

if (eta < 18) {
    tot = 'Totale del tuo biglietto: €' + prezzoUnder;
} else if (eta > 65) {
   tot = 'Totale del tuo biglietto: €' + prezzoOver;
} else {
    tot = 'Totale del tuo biglietto: €' + prezzoStandard;
}

document.getElementById('tot').innerHTML = tot;