let count1 = 0; 
let count2 = 0;  

const counter1Element = document.getElementById("counter1"); 
const counter2Element = document.getElementById("counter2");  
const ball = document.getElementById("ball");  
const container = document.getElementById("container"); 

document.getElementById("button1").addEventListener("click", function() { 
    count1++;
    counter1Element.textContent = count1; 
});

document.getElementById("button2").addEventListener("click", function() { 
    count2++;
    counter2Element.textContent = count2; 
});

container.addEventListener("click", function(event) {  
    const rect = container.getBoundingClientRect(); 
    const offsetX = event.clientX - rect.left;  
    const offsetY = event.clientY - rect.top;  

    ball.style.left = offsetX - (ball.offsetWidth / 2) + 'px'; 
    ball.style.top = offsetY - (ball.offsetHeight / 2) + 'px';

    const ballRect = ball.getBoundingClientRect();
    if (ballRect.left <= rect.left || ballRect.right >= rect.right) {
        count1++; 
        counter1Element.textContent = count1;
    }
});
