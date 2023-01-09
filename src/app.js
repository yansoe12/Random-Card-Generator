/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //Random Number and Shape of Cards
  let Card_shape = ["♦", "♥", "♠", "♣"];
  let random_Card = Card_shape[Math.floor(Math.random() * Card_shape.length)];

  //Random Number and Shape of Cards
  let number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
  let Random_Number = number[Math.floor(Math.random() * number.length)];

  //Add to DOM to Display Random Card Shape
  document.getElementById("playing-CardShape").innerHTML = random_Card;
  document.getElementById("playing-CardShape1").innerHTML = random_Card;
  document.getElementById("number").innerHTML = Random_Number;

  //generating random  Card number
  if (random_Card == "♣" || random_Card == "♦") {
    document.getElementById("playing-CardShape").style.color = "red";
    document.getElementById("playing-CardShape1").style.color = "red";
    document.getElementById("number").style.color = "red";
  }
  console.log("Hello Rigo from the console!");
};
