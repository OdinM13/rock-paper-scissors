let humanScore = 0;
let computerScore = 0;
const MAX = 3; // 3 because of 3 choices: rock, paper, scissors

function getComputerChoice() {
    return Math.floor(Math.random() * MAX);
}

function getHumanChoice() {
    return prompt("Choose between Rock, Paper or Scissors");
}

function playRound (humanChoice, computerChoice) {
    return;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(humanSelection);
console.log(computerSelection);

playRound(humanSelection, computerSelection);
