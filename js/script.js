let distance = prompt(`Quanti km vuoi percorrere?`);

let age = prompt(`Quanti anni hai?`);

let standardPrice = distance * 0.21;

let outputMessage = document.getElementById('ticket-price');

if (age < 18) {

    let finalPrice = standardPrice * 0.8;

    outputMessage.innerHTML = `Il prezzo del tuo biglietto è di ${finalPrice}&euro;`;

} else if (age >= 65) {

    let finalPrice = standardPrice * 0.6;

    outputMessage.innerHTML = `Il prezzo del tuo biglietto è di ${finalPrice}&euro;`;

} else {

    let finalPrice = standardPrice;

    outputMessage.innerHTML = `Il prezzo del tuo biglietto è di ${finalPrice}&euro;`;

}

