let userWin = 0;
let computerWin = 0;
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
  let pick = prompt(
    "Type in your choice: Rock, Paper, or Scissors?"
  ).toLowerCase();
  let computerPick = computerPlay();
  if (pick !== "rock" && pick !== "paper" && pick !== "scissors") {
    alert("Wrong input!");
    playerInput();
  } else {
    console.log(`you chose ${pick} .`);
    alert(`Ok, you chose ${pick} .`);
    playRound(pick, computerPick);
  }
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

// function game() {
//   for (let i = 0; i < 5; i++) {
//     playerInput();
//   }

//   if (userWin > computerWin) {
//     alert("You won! Congratulations!");
//   } else if (computerWin > userWin) {
//     alert("You lose, noob!");
//   } else {
//     alert("Tie!");
//   }

//   let again = confirm("Again?");

//   if (again === true) {
//     userWin = 0;

//     computerWin = 0;

//     game();
//   } else {
//     alert("Thanks for playing!");
//   }
// }

// Function for 5 gameplay rock-paper-scissors.

// game();

// Execute the programs.

// playerInput();
