'use strict';


console.log('Ciao mondo pari o dispari');

// variabile per tenere traccia della validità della scelta dell'utente
let sceltaUtenteValida = false;
let sceltaUtente;

// chiedo all'utente di scegliere pari o dispari finché non fornisce una scelta valida
while (!sceltaUtenteValida) {
    sceltaUtente = prompt('Scegli pari o dispari');
    if (sceltaUtente === 'pari' || sceltaUtente === 'dispari') {
        console.log('L\'utente ha scelto ' + sceltaUtente);
        sceltaUtenteValida = true;
    } else {
        alert('Scelta non valida');
    }
}
// input all'utente di inserire un numero da 1 a 5
let numeroUtente = Number(prompt('Scegli un numero da 1 a 5'));

// richiesta all'utente di inserire un numero valido finché non lo fa
while (numeroUtente < 1 || numeroUtente > 5 || isNaN(numeroUtente)) {
    numeroUtente = Number(prompt('Scelta non valida. Scegli un numero da 1 a 5'));
}

console.log('L\'utente ha scelto ' + numeroUtente);


// generazione di un numero casuale da 1 a 5 per il computer
let numeroPc = Math.floor(Math.random() * 5) + 1;

//  somma dei due numeri
let somma = numeroUtente + numeroPc;

// funzione per determinare se la somma dei due numeri è pari o dispari
function pariDispari(numero) {
    if (numero % 2 === 0) {
        return ('pari');
    } else {
        return ('dispari');
    }
}


let risultato = pariDispari(somma);

// determiniamo il vincitore
if (sceltaUtente === risultato) {
    console.log('Hai vinto');
} else {
    console.log('Hai perso');
}

// stampa i numeri scelti e il risultato
console.log('Il numero del PC è ' + numeroPc);
console.log('La somma è ' + somma);
console.log('Il risultato è ' + risultato);
