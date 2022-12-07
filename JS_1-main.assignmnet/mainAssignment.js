"use strict";

alert("Hi there! Wanna play a game with me?");

let playerScore = 0;
let computerScore = 0;

function game() {
  for (let i = 1; i < 6; i++) {
    console.log(`Round ${i}:`);
    alert(`Round ${i}:`);

    let playerSelection;
    do {
      playerSelection = prompt("Choose between rock, paper or scissor:")
        .trim()
        .toLocaleLowerCase();
    } while (
      playerSelection !== "rock" &&
      playerSelection !== "paper" &&
      playerSelection !== "scissor"
    );

    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }
  checkWinner(playerScore, computerScore);
}

function computerPlay() {
  let choice = Math.trunc(Math.random() * 3) + 1;

  if (choice === 1) {
    return "rock";
  }
  if (choice === 2) {
    return "paper";
  }
  if (choice === 3) {
    return "scissor";
  }
}

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection);

  while (playerSelection !== computerSelection) {
    if (
      (playerSelection === "rock" && computerSelection === "scissor") ||
      (playerSelection === "scissor" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      console.log(`You Won! ${playerSelection} beats ${computerSelection}!`);
      alert(`You won! ${playerSelection} beats ${computerSelection}!`);
      playerScore += 1;
      break;
    } else {
      console.log(`You lost! ${computerSelection} beats ${playerSelection}!`);
      alert(`You lost! ${computerSelection} beats ${playerSelection}!`);
      computerScore += 1;
      break;
    }
  }

  if (playerSelection === computerSelection) {
    console.log(`It's a draw! You both chose ${playerSelection}!`);
    alert(`It's a draw! You both chose ${playerSelection}!`);
  }
}

function checkWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    alert(
      `The Game Is Over! You WON the game: ${playerScore}-${computerScore}`
    );
  } else if (playerScore < computerScore) {
    alert(
      `The Game Is Over! You LOST the game: ${playerScore}-${computerScore}`
    );
  } else {
    alert(`The Game Is Over! It's a draw: ${playerScore}-${computerScore}`);
  }
}

game();
