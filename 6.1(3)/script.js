let numbers = []; 

document.getElementById("addNumber").addEventListener("click", function() {
    const input = document.getElementById("numberInput").value; 
    const number = Number(input); 

    if (input.trim() === "" || isNaN(number)) {
        document.getElementById("result").textContent = "Bitte geben Sie eine gültige Zahl ein.";
    } else {
        numbers.push(number);
        document.getElementById("numberInput").value = ""; 
        document.getElementById("result").textContent = ""; 
        updateNumberList();
    }
});

document.getElementById("calculate").addEventListener("click", function() {
    if (numbers.length === 0) {
        document.getElementById("result").textContent = "Keine Zahlen eingegeben.";
        return;
    }

    const operation = document.getElementById("operation").value;
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
            result = null;
    }

    if (result !== null) {
        document.getElementById("result").textContent = `Das Ergebnis der Operation ${operation} ist: ${result}`;
    } else {
        document.getElementById("result").textContent = "Ungültige Operation.";
    }
});


function updateNumberList() {
    const numberList = document.getElementById("numberList");
    numberList.textContent = "Eingegebene Zahlen: " + numbers.join(", ");
}
