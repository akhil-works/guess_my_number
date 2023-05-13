"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};
const displayScore = (score) => {
  document.querySelector(".score").textContent = score;
};
const styleWidth = (width) => {
  document.querySelector(".number").style.width = width;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("⛔️ No number!");
  } else if (guess === secretNumber) {
    displayMessage("🥳 Your Guess Is Correct !");
    document.querySelector(".highscore").textContent = score;
    document.querySelector(".number").textContent = secretNumber
    document.querySelector("body").style.backgroundColor = "#60b347";
    styleWidth("15rem");
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
    score--;
    if (score > 0) {
      displayScore(score);
    } else {
      displayMessage("💥 You lost !");
      displayScore(0);
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("💭💭💭 Start guessing...");
  displayScore(score);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".highscore").textContent = 0;
  document.querySelector("body").style.backgroundColor = "#222";
  styleWidth("10rem");
});
