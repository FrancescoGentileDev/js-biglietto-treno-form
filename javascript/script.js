

const passengerName = document.getElementById('passengerName');
const passengerAge = document.getElementById('passengerAge');




let percorrenza = NaN
let eta = NaN
let costoTotale; 

    while (isNaN(percorrenza) || isNaN(eta)) {
        // percorrenza = parseInt(prompt("inserire il numero dei km da percorrere"));
        // eta = parseInt( prompt("inserire l'età del passeggero"));
    }
   costoTotale = percorrenza * 0.21;

if (eta < 18) {
    costoTotale -= costoTotale * 0.2;
}
else if (eta > 65) {
    ccostoTotale -= costoTotale * 0.4;
}

costoTotale = costoTotale.toFixed(2)

// alert(`Il prezzo da pagare è €${costoTotale}`)
