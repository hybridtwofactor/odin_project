
function getComputerChoice() {
    const shapes = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * shapes.length);
    return shapes[random];
}

function addToLog(roundResult) {
    const log = document.querySelector(".log");
    const content = document.createElement("p");
    content.textContent = roundResult;
    content.style.fontSize = "16px";
    content.style.fontWeight = "normal";
    log.appendChild(content);
}

function playRound(e) {
    playerSelection = e.target.id;
    computerSelection = getComputerChoice();
    
    // when both tie
    if (playerSelection === computerSelection) {
        console.log(`It's a tie! Both played ${playerSelection}`)
        addToLog("tie")
    }
    
    // when player wins
    if ((playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors")) {
        addToLog(`You Win! ${playerSelection} > ${computerSelection}`)
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    }
    
    // when computer wins
    if ((computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "rock" && playerSelection === "scissors")) {
        addToLog(`You Win! ${playerSelection} < ${computerSelection}`)
        computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        roundWinner = "computer";
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
}

//testing
const rockBtn = document.querySelector("#rock");
console.log(rockBtn);

const selections = document.querySelectorAll(".selectableButton");
console.log(selections);
selections.forEach(selectableButton => selectableButton.addEventListener("click", playRound))

const log = document.querySelector(".log");