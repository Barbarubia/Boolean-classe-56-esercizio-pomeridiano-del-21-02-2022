// chiedo all'utente la distanza che vuole percorrere
let distance = prompt(`Quanti km vuoi percorrere?`);

// chiedo all'utente quanti anni ha
let age = prompt(`Quanti anni hai?`);

// configuro una variabile per il prezzo senza tenere conto dell'età dell'utente
let standardPrice = distance * 0.21;

let outputMessage = document.getElementById('ticket-price');

// calcolo il prezzo finale del biglietto in base all'età dell'utente e arrotondo il risultato a 2 cifre decimali
if (age < 18) {

    let finalPrice = ((Math.round(standardPrice * 0.8 * 100) / 100).toFixed(2)).replace(".",",");

    outputMessage.innerHTML = `<h3>Avendo ${age} anni hai diritto allo sconto del 20%!</h3><br><h3>Il prezzo del tuo biglietto è di ${finalPrice}&euro;</h3><button>Compra il biglietto</button>`;

} else if (age >= 65) {

    let finalPrice = ((Math.round(standardPrice * 0.6 * 100) / 100).toFixed(2)).replace(".",",");

    outputMessage.innerHTML = `<h3>Avendo ${age} anni hai diritto allo sconto del 40%!</h3><br><h3>Il prezzo del tuo biglietto è di ${finalPrice}&euro;</h3><button>Compra il biglietto</button>`;

} else {

    let finalPrice = ((Math.round(standardPrice * 100) / 100).toFixed(2)).replace(".",",");

    outputMessage.innerHTML = `<h3>Il prezzo del tuo biglietto è di ${finalPrice}&euro;</h3><button>Compra il biglietto</button>`;

}

