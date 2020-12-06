let pick = "";
let userWin = 0;
let computerWin = 0;

function askName() {
  pick = prompt("What is your name?").toUpperCase();
  document.getElementById("outputName").innerHTML = pick;
}
askName();

function playerRock() {
  pick = "rock";
  playerInput();
}

const imgButton1 = document.querySelector("#imgButton1");
imgButton1.addEventListener("click", playerRock);
const imgButton2 = document.querySelector("#imgButton2");
imgButton2.addEventListener("click", playerPaper);
const imgButton3 = document.querySelector("#imgButton3");
imgButton3.addEventListener("click", playerScissors);

// create scores for player and computer

function computerPlay() {
  const choice = ["rock", "paper", "scissors"];
  // list the choices

  let computerChoice = Math.floor(Math.random() * 3);
  // randomly chooses from its given choices
  return choice[computerChoice];
}
// computer randomly picks

function playerInput() {
  let computerPick = computerPlay();
  console.log(`you chose ${pick} .`);
  alert(`Ok, you chose ${pick} .`);
  playRound(pick, computerPick);
}

// Player picks

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
