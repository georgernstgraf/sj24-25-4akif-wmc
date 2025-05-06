function isPrim(n) {
    if(n < 2) return false;
    for(let i=2; i<n; i++) {
        if(n%i == 0) return false;   
    }
    return true;
}

function konfettiRegen() {
    confetti({
        particleCount: 150, // Anzahl der Partikel
        spread: 70,         // Weite des Effekts
        origin: { y: 0.6 }  // Startpunkt (etwas unterhalb der Mitte)
    });
}

function checkPrim() {
    let n = parseInt(document.getElementById("inputNumber").value); // parseInt wandelt String in Zahl um
    let yellow = "#facc15";
    let green = "#4ade80";
    let red = "#fb7185";
    let output = document.getElementById("output");

    if(n < 0) {
        output.textContent = "NUR POSITIVE ZAHLEN !";
        output.style.backgroundColor = yellow;
        output.style.color = "black";
        return;
    }

    if(isNaN(n)) {
        output.textContent = "ZAHL EINGEBEN HAB ICH GESAGT !";
        output.style.backgroundColor = yellow;
        output.style.color = "black";
        return;
    }

    if(isPrim(n)) {
        output.textContent = n + " ist eine Primzahl";
        output.style.backgroundColor = green;
        konfettiRegen();
    }
    else {
        output.textContent = n + " ist keine Primzahl";
        output.style.backgroundColor = red;
    }
}

function reset() {
    document.getElementById("inputNumber").value = "";
}
