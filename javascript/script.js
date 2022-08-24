const button = document.getElementById("calculate");

button.addEventListener("click", () => {
  const passengerName = document.getElementById("passengerName").value;
  const eta =parseInt(document.getElementById("passengerAge").value) ;
  const percorrenza = document.getElementById("distance").value;
    let costoTotale = percorrenza * 0.21;
    switch (eta) {
        case 0:
            costoTotale -= costoTotale * 0.2;
            break;
        case 2:
            costoTotale -= costoTotale * 0.4;
            break;


    }
    costoTotale = costoTotale.toFixed(2);


    showTicket(passengerName, eta, costoTotale)
});


function showTicket(passengerName, eta, costoTot) {
    document.getElementById("viewName").innerHTML = passengerName
    let viewRate = document.getElementById("viewRate");
    if (eta === 1) {
        viewRate.innerHTML = "Tariffa Standard"
    }
    else {
        viewRate.innerHTML = "Tariffa Ridotta"
    }

    document.getElementById("viewCab").innerHTML = Math.floor(Math.random() * 20) + 1 
    document.getElementById("viewCP").innerHTML = Math.floor(Math.random() * 10000) + 1 
    document.getElementById("viewPrice").innerHTML = costoTot;




}