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
    console.log(
      `You threw out ${playerSelection} and Computer chooses ${computerSelection}, it's a tie!`
    );
    alert("DRAW!");
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log(
      `You went with ${playerSelection} and Computer commands with ${computerSelection}, you win!`
    );
    alert("YOU WIN THE ROUND!");
    userWin++;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log(
      "You pick " +
        playerSelection +
        " and Computer pick " +
        computerSelection +
        ", you lose!"
    );

    alert("You lose!");

    computerWin++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(
      "You pick " +
        playerSelection +
        " and Computer pick " +
        computerSelection +
        ", you win!"
    );

    alert("You win!");

    userWin++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log(
      "You pick " +
        playerSelection +
        " and Computer pick " +
        computerSelection +
        ", you lose!"
    );

    alert("You lose!");

    computerWin++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(
      "You pick " +
        playerSelection +
        " and Computer pick " +
        computerSelection +
        ", you win!"
    );

    alert("You win!");

    userWin++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log(
      "You pick " +
        playerSelection +
        " and Computer pick " +
        computerSelection +
        ", you lose!"
    );

    alert("You lose!");

    computerWin++;
  } else {
    alert("Wrong input");
  }
}
// Function for gameplay single round.

function checkWinner() {
  if (compScore == 5 && playerScore == 5) {
    roundResults.textContent = "The game is a Tie!";
    roundResults.style.color = "blue";
    buttonRow.forEach((input) => {
      input.removeEventListener("click", getPlayerChoice);
    });
  } else if (compScore == 5) {
    roundResults.textContent = "You Lost the game to a computer!";
    roundResults.style.color = "red";
    buttonRow.forEach((input) => {
      input.removeEventListener("click", getPlayerChoice);
    });
  } else if (playerScore == 5) {
    roundResults.textContent = "You Win the game!!!!";
    roundResults.style.color = "green";
    buttonRow.forEach((input) => {
      input.removeEventListener("click", getPlayerChoice);
    });
  }
}

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
