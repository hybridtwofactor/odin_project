let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let roundWinner;

function getComputerChoice() {
    const selection = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * selection.length);
    return selection[random];
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
    firstLetterCapital = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    if (roundWinner === "player") {
        console.log(`You Win! ${firstLetterCapital} beats ${computerSelection}`);
    } else if (roundWinner === "computer") {
        console.log(`You Lose! ${firstLetterCapital} loses to ${computerSelection}`);
    } else {
        console.log(`It's a tie! Both played ${playerSelection}`)
    }
}

function updateScoreBoard() {
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
        winnerHeading.style.color = "#d8b207";
        winnerHeading.textContent = "Player Wins!";
    } else {
        computerButtonSelection.forEach((nonSelectableButton) => nonSelectableButton.classList.add('endGameSelection'));
        const winnerHeading = document.querySelector(".computerHeading");
        winnerHeading.style.color = "#d8b207";
        winnerHeading.textContent = "Computer Wins!";
    }
    playerButtonSelection.forEach((selectableButton) => selectableButton.style.pointerEvents = "none");
}

function playRound(e) {
    playerSelection = e.target.id;
    computerSelection = getComputerChoice();
    document.querySelector("#computer-" + computerSelection).classList.add("computerSelection");
    setTimeout(() => {
        const computerButtons = document.querySelectorAll(".nonSelectableButton")
        computerButtons.forEach((nonSelectableButton) => nonSelectableButton.classList.remove("computerSelection"));
    }, 300)

    
    // when both tie
    if (playerSelection === computerSelection) {
        roundWinner = "tie";
        addToLog(`Tie! ${playerSelection} = ${computerSelection}`)
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

const selections = document.querySelectorAll(".selectableButton");
selections.forEach(selectableButton => selectableButton.addEventListener("click", playRound))



