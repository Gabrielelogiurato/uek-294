window.onload = function() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;

    const h1 = document.querySelector("h1");
    h1.innerText = "Gabriele";

    const paragraph = document.querySelector("p"); 
    paragraph.classList.add("large");  

    const ul = document.querySelector("ul"); 
    const newLi = document.createElement("li"); 
    newLi.innerText = "Dritter Eintrag"; 
    ul.append(newLi);  

    const secondLi = ul.querySelectorAll("li")[1];
    secondLi.remove(); 

    const img = document.createElement("img"); 
    img.src = "images/image.png" 
    img.style.width= "300px" 
    img.alt = "Tier";  
    h1.after(img);

    const itemsArray = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"];  
    itemsArray.forEach(item => { 
        const li = document.createElement("li");
        li.innerText = item; 
        ul.append(li); 
    });
};
