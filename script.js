"use strict";

const dice = document.querySelector(".dice");
const currentScore0 = document.querySelector("#current--0");
const currentScore1 = document.querySelector("#current--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");

const diceRoll = document
  .querySelector(".btn--roll")
  .addEventListener("click", diceGenerator);

const hold = document
  .querySelector(".btn--hold")
  .addEventListener("click", holdTrigger);

currentScore0.textContent = 0;
currentScore1.textContent = 0;

let score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

function diceGenerator() {
  let randomNumber = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${randomNumber}.png`;

  dice.classList.remove("hidden");

  if (randomNumber !== 1) {
    currentScore = currentScore + randomNumber;

    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    if (activePlayer === 0) {
      activePlayer = 1;

      player0.classList.remove("player--active");
      player1.classList.add("player--active");
    } else {
      activePlayer = 0;

      player1.classList.remove("player--active");
      player0.classList.add("player--active");
    }

    randomNumber = 0;

    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
    currentScore = 0;
  }
  // console.log(score);
}

function holdTrigger() {
  score[activePlayer] = score[activePlayer] + currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    score[activePlayer];

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  currentScore = 0;

  if (activePlayer === 0) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--active");
    player1.classList.remove("player--active");
  } else {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--active");
    player0.classList.remove("player--active");
  }

  if (score[activePlayer] >= 20) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
  }

  console.log(score);
}

// document
//       .querySelector(`.player--${activePlayer}`)
//       .classList.add("player--active");
//     player1.classList.remove("player--winner");
