let numbers = [];
let input;

while (true) {
    input = prompt("Bitte geben Sie eine Zahl ein (oder lassen Sie das Feld leer, um zu beenden):");
    if (input === null || input.trim() === "") {
        break;
    }
    let number = Number(input);
    if (isNaN(number)) {
        alert("Fehler: Bitte eine gültige Zahl eingeben.");
    } else {
        numbers.push(number);
    }
}

if (numbers.length === 0) {
    alert("Keine Zahlen eingegeben.");
} else {
    let operation = prompt("Wählen Sie eine Operation (+, -, *, /):");
    let result;
    switch (operation) {
        case "+":
            result = numbers.reduce((acc, curr) => acc + curr, 0);
            break;
        case "-":
            result = numbers.reduce((acc, curr) => acc - curr);
            break;
        case "*":
            result = numbers.reduce((acc, curr) => acc * curr, 1);
            break;
        case "/":
            result = numbers.reduce((acc, curr) => acc / curr);
            break;
        default:
            alert("Ungültige Operation gewählt.");
            result = null;
    }
    if (result !== null) {
        alert(`Das Ergebnis der Operation ${operation} ist: ${result}`);
    }
}
