
function getComputerChoice() {
    const shapes = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * shapes.length);
    return shapes[random];
}

function round(playerSelection, computerSelection) {
    let roundWinner;
    playerSelection = playerSelection.toLowerCase();
    
    // when both tie
    if (playerSelection === computerSelection) {
        return("Tie");
    }
    
    // when player wins
    if ((playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors")) {
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        roundWinner = "player";
        return(`You Win! ${playerSelection} beats ${computerSelection}`);
    }
    
    // when computer wins
    if ((computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "rock" && playerSelection === "scissors")) {
        computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        roundWinner = "computer";
        return(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
}

console.log("test get ComputerChoice() function");
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log("test round() function");
console.log("------------------------------")
console.log(round("Rock", getComputerChoice()))
console.log(round("RoCK", getComputerChoice()))
console.log(round("rock", getComputerChoice()))
console.log(round("Paper", getComputerChoice()))
console.log(round("PaPeR", getComputerChoice()))
console.log(round("paper", getComputerChoice()))
console.log(round("Scissors", getComputerChoice()))
console.log(round("SCIssors", getComputerChoice()))
console.log(round("scissors", getComputerChoice()))
