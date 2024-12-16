let number = document.getElementById("number");

function updateCounter(newCount) {
    number.innerText = newCount;
    
    history.pushState({ count: newCount }, "", `?count=${newCount}`);
}

document.getElementById("up").addEventListener("click", () => {
    let currentCount = parseInt(number.innerText);
    updateCounter(currentCount + 1);
});

document.getElementById("down").addEventListener("click", () => {
    let currentCount = parseInt(number.innerText);
    updateCounter(currentCount - 1);
});

window.addEventListener("load", () => {
    let urlParams = new URLSearchParams(window.location.search);
    let countFromURL = urlParams.get("count");

    if (countFromURL !== null) {
        number.innerText = parseInt(countFromURL);
    }
});

window.addEventListener("popstate", (event) => {
    if (event.state && event.state.count !== undefined) {
        number.innerText = event.state.count;
    }
});
