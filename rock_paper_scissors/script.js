
function getComputerChoice() {
    const shapes = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * shapes.length);
    return shapes[random];
}

function round(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    // when both tie
    if (playerSelection === computerSelection) {
        console.log(`It's a tie! Both played ${playerSelection}`)
        return "tie";
    }
    
    // when player wins
    if ((playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors")) {
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return "player";
    }
    
    // when computer wins
    if ((computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "rock" && playerSelection === "scissors")) {
        computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        roundWinner = "computer";
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return "computer"
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundResult;

    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("What's your selection? rock, paper or scissors?")
        roundResult = round(playerSelection, getComputerChoice());
        if (roundResult === "player") {
            playerScore++;
        } else if (roundResult === "computer") {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("Player wins!");
    } else if (computerScore > playerScore) {
        console.log("Player wins!");
    } else if (computerScore === playerScore) {
        console.log("Tie!");
    } 
    console.log(`Player score is ${playerScore}`);
    console.log(`Computer score is ${computerScore}`);
}


console.log("test game() function");
game();