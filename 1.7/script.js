let zufallszahl = Math.floor(Math.random() * 100) + 1;
let geraten = false;

alert("Willkommen! Versuchen Sie, die Zahl zwischen 1 und 100 zu erraten.");

while (!geraten) {
    let versuch = parseInt(prompt("Geben Sie eine Zahl zwischen 1 und 100 ein:"));

    if (versuch > zufallszahl) {
        alert("Zu hoch! Versuchen Sie es erneut.");
    } else if (versuch < zufallszahl) {
        alert("Zu niedrig! Versuchen Sie es erneut.");
    } else if (versuch === zufallszahl) {
        alert("Herzlichen Glückwunsch! Sie haben die Zahl erraten.");
        geraten = true;
    } else {
        alert("Bitte geben Sie eine gültige Zahl ein.");
    }
}
