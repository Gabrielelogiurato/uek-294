document.getElementById("greetingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("nameInput").value;
    let currentHour = new Date().getHours();
        let greeting;

    if (currentHour >= 5 && currentHour < 10) {
        greeting = "Guten Morgen";
    } else if (currentHour >= 10 && currentHour < 18) {
        greeting = "Guten Tag";
    } else if (currentHour >= 18 && currentHour < 22) {
        greeting = "Guten Abend";
    } else {
        greeting = "Gute Nacht";
    }

    document.getElementById("greeting-output").innerText = `${greeting}, ${name}!`;
});