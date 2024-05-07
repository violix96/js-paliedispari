'use strict'
// reset js 

console.log('ciao mondo');

// input tramite prompt all'utente per linserimento della parola 

let parolaUtante = prompt('Inserisci una parola:');

// funzione per verificare se la parola è palindroma
function palindroma(parola){

    let parolaInversa = parola.split('').reverse().join('');

    if(parolaInversa === parola){
        return true;
    }else{
        return false;
    }
}

//  stampa del risultato
if(palindroma(parolaUtante)){
    console.log('La parola è palindroma');
}else{
    console.log('La parola non è palindroma');
}