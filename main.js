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

function playRound (humanChoice, computerChoice, humanScore, computerScore) {
    if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock")){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    if (humanChoice == computerChoice) {
        console.log("Tie! You and the computer chose", humanChoice);
    }
    return [humanScore, computerScore];
}

// console.log(humanSelection);
// console.log(computerSelection);

function playGame () {
    let humanScore = 0;
    let computerScore = 0;
    while (humanScore != 5 && computerScore != 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        [humanScore, computerScore] = playRound(humanSelection, computerSelection, humanScore, computerScore);
        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
        if (humanScore == 5) {
            console.log("Congratulations you won!");
        }
        if (computerScore == 5) {
            console.log("Sorry, you lost!");
        }
    }
}

playGame();
