let humanScore = 0;
let computerScore = 0;
const MAX = 3; // 3 because of 3 choices: rock, paper, scissors

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * MAX);
    if (computerChoice == 0) {
        return "rock";
    }
    if (computerChoice == 1) {
        return "paper";
    }
    if (computerChoice == 2) {
        return "scissors";
    }
        
}

function getHumanChoice() {
    humanChoice = prompt("Choose between Rock, Paper or Scissors").toLowerCase();
    return humanChoice;
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors");
    }
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock");
    }
    if (humanChoice == computerChoice) {
        console.log("Tie! You and the computer chose", humanChoice);
    }
    return;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(humanSelection);
console.log(computerSelection);

playRound(humanSelection, computerSelection);
