// Random Numbers

var randomNumber1 = Math.floor(Math.random() * 6) +1;
var randomNumber2 = Math.floor(Math.random() * 6) +1;

// Webpage Changes

var h1 = document.querySelector("h1");
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

// Dice 1

var randomDiceImg = "images/dice" + randomNumber1 + ".png";
img1.setAttribute("src", randomDiceImg);

// dice2

var randomDiceImg2 = "images/dice" + randomNumber2 + ".png";
img2.setAttribute("src", randomDiceImg2);

// Title

if (randomNumber1 == randomNumber2){
  h1.innerHTML = "Empate";
} else if (randomNumber1 > randomNumber2){
  h1.innerHTML = "Player1 Wins";
} else {
  h1.innerHTML = "Player2 Wins";
}
