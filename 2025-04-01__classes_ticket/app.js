// 1.APPLICATION STATE;
// 2.STATE ACCESSORS / MUTATORS FN'S
class State {
    #guthaben;
    #gesamtEinnahmen;
    #message;
    constructor() {
        this.#guthaben = 0;
        this.#gesamtEinnahmen = 0;
    }
    get textAusgabe() {}
    get guthaben() {
        return this.#guthaben;
    }
    get fahrpreis() {}
    get einnahmen() {}
    einwerfen(geld) {
        if (geld <= 0) throw new Error("bitte positiven\nBetrag einwerfen");
        this.#guthaben += geld;
    }
    set message(msg) {
        this.#message = msg;
    }
    get message() {
        return this.#message;
    }
}
const zieleUndPreise = {
    Bregenz: 90,
    Eisenstadt: 13,
    Graz: 40,
    Innsbruck: 80,
    Klagenfurt: 60,
    Linz: 40,
    Salzburg: 60,
    "St. Pölten": 15,
};
// 3.DOM Node Refs
const einwerfenInput = document.getElementById("einwerfenBetrag");
const einwerfenButton = document.getElementById("einwerfenButton");
const zielSelect = document.getElementById("ziel");
const anzahlPersonenInput = document.getElementById("anzahlPersonen");
const fahrpreisSpan = document.getElementById("fahrpreis");
const guthabenSpan = document.getElementById("guthaben");
const ticketAusgabeTextarea = document.getElementById("ticketAusgabe");
const einnahmenSpan = document.getElementById("einnahmen");
const ticketKaufen = document.getElementById("ticketKaufen");
const resetBtn = document.getElementById("reset");

// 4. DOM NODE CREATION FUNCTIONS
// 5.RENDER FN
function render() {
    ticketAusgabeTextarea.textContent = state.message;
    guthabenSpan.textContent = state.guthaben;
    fahrpreisSpan.textContent = state.fahrpreis;
    einnahmenSpan.textContent = state.einnahmen;
}
// These functions will render the application state to the DOM
// IMPORTANT TAKEAWAY: The state drives the UI, any state change should trigger a re - render of the UI;

// 6.EVENT HANDLERS
// These functions handle user interaction e.g.button clicks, key presses etc.
// These functions will call the state mutators and then call the render function
//     The naming convention for the event handlers is on < Event >
//         Here we will create a functions that will handle e.g.a "click" event on a button.
function onEinwurf() {
    const geld = einwerfenInput.valueAsNumber;
    try {
        state.einwerfen(geld);
    } catch (err) {
        state.message = err.message;
    }
    einwerfenInput.value = "";
    render();
}
function onZielSelect() {
    state.ziel = "TODO";
    render();
}
function onTicketKaufen() {
    try {
        state.ticketKauf();
    } catch (e) {
        "TODO";
    } finally {
        render();
    }
}
function onAnzahlChange() {
    console.log("anzahl ändert sich");
    try {
        state.anzahlGäste = 0; // TODO
    } catch (e) {
        "TODO";
    } finally {
        render();
    }
}
function onReset() {
    "TODO";
    render();
}
// 7.INIT BINDINGS
// These are the initial bindings of the event handlers, i.e.register the handlers of Pt. 6 with the DOM Node Refs of;
// Pt. 3;
einwerfenInput.addEventListener("keyup", (e) => {
    if (e.key != "Enter") {
        return;
    }
    onEinwurf();
});
einwerfenButton.addEventListener("click", () => {
    onEinwurf();
});
zielSelect.addEventListener("change", onZielSelect);
anzahlPersonenInput.addEventListener("change", onAnzahlChange);
ticketKaufen.addEventListener("click", onTicketKaufen);
resetBtn.addEventListener("click", onReset);

// 8.INITIAL RENDER
// Here will call the render function (Pt. 5) to render the initial state of the application;
zielSelect.innerHTML = Object.keys(zieleUndPreise)
    .map((stadt) => `<option value="${stadt}">${stadt}</option>`)
    .join("\n");

const state = new State();
render();
