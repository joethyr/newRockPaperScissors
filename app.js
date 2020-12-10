let userWin = 0;
let computerWin = 0;
// create scores for player and computer

const buttonRow = document.querySelectorAll(".buttonRow input");
const playerScore = document.querySelector("#playerScore");
const cpuScore = document.querySelector("#cpuScore");
const reset = document.querySelector("#reset");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const messageBox = document.querySelector("#messageBox");

function computerPlay() {
  const choice = ["rock", "paper", "scissors"];
  // list the choices

  let computerChoice = Math.floor(Math.random() * 3);
  // randomly chooses from its given choices
  return choice[computerChoice];
}
// computer randomly picks

startGame();

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    messageBox.textContent = `you chose and ${playerSelection} and the cpu chooses ${computerSelection}... Its a tie!`;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore.textContent = ++userWin;
    messageBox.textContent = `you chose and ${playerSelection} and the cpu chooses ${computerSelection}... you win!`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    cpuScore.textContent = ++computerWin;
    messageBox.textContent = `you chose and ${playerSelection} and the cpu chooses ${computerSelection}... you lose!`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore.textContent = ++userWin;
    messageBox.textContent = `you chose and ${playerSelection} and the cpu chooses ${computerSelection}... you win!`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    cpuScore.textContent = ++computerWin;
    messageBox.textContent = `you chose and ${playerSelection} and the cpu chooses ${computerSelection}... you lose!`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore.textContent = ++userWin;
    messageBox.textContent = `you chose and ${playerSelection} and the cpu chooses ${computerSelection}... you win!`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    cpuScore.textContent = ++computerWin;
    messageBox.textContent = `you chose and ${playerSelection} and the cpu chooses ${computerSelection}... you lose!`;
  } else {
    messageBox.textContent = `wrong input!`;
  }
}
// Function for gameplay single round.

// Execute the programs.

function resetGame() {
  resetBtn.addEventListener("click", () => location.reload());
}

function startGame() {
  buttonRow.forEach((input) => {
    input.addEventListener("click", getPlayerSelection);
  });
}

function getPlayerSelection(e) {
  playerSelection = e.target.id;
  playRound(playerSelection, computerPlay());
}
