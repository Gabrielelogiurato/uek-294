let zufallszahl = Math.floor(Math.random() * 100) + 1;
let geraten = false;

document.getElementById("guessForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let versuch = parseInt(document.getElementById("guessInput").value);
    let message = "";

    if (isNaN(versuch) || versuch < 1 || versuch > 100) {
        message = "Bitte geben Sie eine gültige Zahl zwischen 1 und 100 ein."; 
    } else if (versuch > zufallszahl) {
        message = "Zu hoch! Versuchen Sie es erneut.";
    } else if (versuch < zufallszahl) {
        message = "Zu niedrig! Versuchen Sie es erneut.";
    } else {
        message = "Herzlichen Glückwunsch! Sie haben die Zahl erraten.";
        geraten = true;
    }

    document.getElementById("message").textContent = message;

    if (geraten) {
        document.getElementById("guessForm").reset();
        zufallszahl = Math.floor(Math.random() * 100) + 1;
        geraten = false;
    }
});
