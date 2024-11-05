// 1
document.querySelector(".games").getElementsByTagName("li");
document.getElementsByClassName("games")[0].getElementsByTagName("li");
element = document.querySelector('#games-of-the-day');
// 2
document.querySelectorAll(".games")[1].getElementsByTagName("li")[1];
document.getElementsByClassName("games")[1].getElementsByTagName("li")[1];
element = document.querySelector('.games:nth-of-type(2) li:nth-of-type(2)');
 
// 3
document.querySelectorAll(".games")[2].getElementsByTagName("li")[3];
document.getElementsByClassName("games")[2].getElementsByTagName("li")[3];
element = document.querySelector('.games:nth-of-type(3) li:last-child');
 
// 4
document.querySelectorAll(".games")[1].getElementsByTagName("li");
document.getElementsByClassName("games")[1].getElementsByTagName("li");
element = document.querySelectorAll('.games:nth-of-type(2) li');
 
// 5
document.querySelectorAll("h1")[0];
document.querySelector("h1");
document.getElementsByTagName("h1")[0];
element = document.querySelector('h1');
 
// 6
document.querySelector("#game-of-the-day");
document.getElementById("game-of-the-day");
element = document.getElementById('game-of-the-day'); 

// 7
document.querySelectorAll(".sale");
document.getElementsByClassName("sale");
element = document.querySelectorAll('.sale');