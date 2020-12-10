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
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      messageBox.textContent =
        "You chose rock and the cpu chooses rock too!...Its a tie!!";
    } else if (computerSelection == "paper") {
      cpuScore.textContent = ++computerWin;
      messageBox.textContent =
        "You chose rock and the cpu chooses paper....Uh-oh. You Lose!";
    } else {
      playerScore.textContent == ++userWin;
      messageBox.textContent =
        "You chose rock and the cpu chooses scissors... Hey! YOU WINN!!";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "paper") {
      messageBox.textContent =
        "You chose paper and the cpu chooses paper too!...Its a tie!!";
    } else if (computerSelection == "scissors") {
      cpuScore.textContent = ++computerWin;
      messageBox.textContent =
        "You chose paper and the cpu chooses scissors....Uh-oh. You Lose!";
    } else {
      playerScore.textContent == ++userWin;
      messageBox.textContent =
        "You chose scissors and the cpu chooses rock... Hey! YOU WINN!!";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "scissors") {
      messageBox.textContent =
        "You chose scissors and the cpu chooses scissors too!...Its a tie!!";
    } else if (computerSelection == "rock") {
      cpuScore.textContent = ++computerWin;
      messageBox.textContent =
        "You chose scissors and the cpu chooses rock....Uh-oh. You Lose!";
    } else {
      playerScore.textContent == ++userWin;
      messageBox.textContent =
        "You chose scissors and the cpu chooses paper... Hey! YOU WINN!!";
    }
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
