"use strict";
function zeichne(kante) {
    for (let z = 0; z < kante; z++) {
        let output = "";
        for (let s = 0; s < kante; s++) {
            if (z === 0 || z === kante - 1 || s === 0 || s === kante - 1) {
                output += "*  ";
            } else {
                output += "   ";
            }
        }
        console.log(output);
    }
}
let h;
h = document.getElementById("ichbins");
h = document.querySelector("h1#ichbins");
h.textContent = "Neuer Text";
h.style.color = "red";
