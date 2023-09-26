let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let roundWinner;

function getComputerChoice() {
    const shapes = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * shapes.length);
    return shapes[random];
}

function addToLog(roundLog) {
    const log = document.querySelector(".log");
    const content = document.createElement("p");
    content.textContent = roundLog;
    content.style.fontSize = "16px";
    content.style.fontWeight = "normal";
    log.appendChild(content);
}

function notifyConsole() {
    consoleRoundWinner = roundWinner.charAt(0).toUpperCase() + roundWinner.slice(1);
    if (roundWinner === "Player") {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else if (roundWinner === "Computer") {
        console.log(`You Lose! ${playerSelection} loses to ${computerSelection}`);
    } else {
        console.log(`It's a tie! Both played ${playerSelection}`)
    }
}

function updateScoreBoard() {
    console.log(roundWinner);
    const playerScoreboard = document.querySelector(".playerScore");
    const computerScoreboard = document.querySelector(".computerScore");

    if (roundWinner === "player") {
        playerScore++;
        playerScoreboard.textContent = playerScore;
    } else if (roundWinner === "computer") {
        computerScore++;
        computerScoreboard.textContent = computerScore;
    }
}

function endGame() {
    const playerButtonSelection = document.querySelectorAll(".selectableButton");
    const computerButtonSelection = document.querySelectorAll(".nonSelectableButton");
    if (roundWinner === "player") {
        playerButtonSelection.forEach((selectableButton) => selectableButton.classList.add('endGameSelection'));
        const winnerHeading = document.querySelector(".playerHeading");
        winnerHeading.textContent = "Player Wins!";
        winnerHeading.classList.add(".winnerHeadingStyle");
        console.log(playerButtonSelection);
    } else {
        computerButtonSelection.forEach((nonSelectableButton) => nonSelectableButton.classList.add('endGameSelection'));
        const winnerHeading = document.querySelector(".computerHeading");
        winnerHeading.textContent = "Computer Wins!";
        winnerHeading.classList.add(".winnerHeadingStyle");
        console.log(computerButtonSelection);
    }
    playerButtonSelection.forEach((selectableButton) => selectableButton.style.pointerEvents = "none");
}


function playRound(e) {
    playerSelection = e.target.id;
    computerSelection = getComputerChoice();
    
    // when both tie
    if (playerSelection === computerSelection) {
        roundWinner = "tie";
        addToLog("tie")
        notifyConsole();
    }
    
    // when player wins
    if ((playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors")) {
        roundWinner = "player";
        addToLog(`You Win! ${playerSelection} > ${computerSelection}`);
        notifyConsole();
    }
    
    // when computer wins
    if ((computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "rock" && playerSelection === "scissors")) {
        roundWinner = "computer";
        addToLog(`You Lose! ${playerSelection} < ${computerSelection}`)
        notifyConsole();
    }

    updateScoreBoard();

    if (playerScore === 5 || computerScore === 5) {
        endGame();
        console.log("end");
    }
}

//testing
const rockBtn = document.querySelector("#rock");
console.log(rockBtn);

const selections = document.querySelectorAll(".selectableButton");
console.log(selections);
selections.forEach(selectableButton => selectableButton.addEventListener("click", playRound))

const reset = document.querySelector(".reset");
reset.addEventListener("click", resetGame());

