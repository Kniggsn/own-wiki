const buttons = document.querySelectorAll(".game-buttons");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const winMessage = document.querySelector("#win-message");
const contentDiv = document.querySelector(".content");

buttons.forEach((btn) => btn.addEventListener("click", playGameRound));

function playGameRound() {
    const playerChoice = String(this.textContent);
    const computerChoice = getComputerChoice();

    checkForWinner(playerChoice, computerChoice);

}

function getComputerChoice() {
    const possibleChoices = ["Rock", "Paper", "Scissors"];
    return possibleChoices[Math.floor(Math.random()*3)];
}

function checkForWinner(pc, cc) {
    if (pc === cc) {
        winMessage.textContent = "It's a draw! You both chose " + pc + "."
    }

    else if ((pc === "Rock" && cc === "Scissors") || (pc === "Scissors" && cc === "Paper") || (pc === "Paper" && cc === "Rock")) {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        if (parseInt(playerScore.textContent) === 5) {
            finalMessage("You")
            toggleGameButtons();
        }
        winMessage.textContent = "You win! " + pc + " beats " + cc + ".";
    }
    else {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        winMessage.textContent = "You lose! The computer chose " + cc + " which beats your " + pc + ".";
        if (parseInt(computerScore.textContent) === 5) {
            finalMessage("The Computer");
            toggleGameButtons();
        }
    }
}



function resetGame() {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    toggleGameButtons();
    winMessage.textContent = "";
}

function finalMessage(winner) {
    const finalMessage = document.createElement("p");
    const resetButton = document.createElement("button");
    finalMessage.textContent = winner + " won five rounds! Want to play a new game?";
    resetButton.textContent = "New Game";
    resetButton.addEventListener("click", resetGame);
    resetButton.addEventListener("click", () => contentDiv.removeChild(finalMessage));
    resetButton.addEventListener("click", () => contentDiv.removeChild(resetButton));
    contentDiv.appendChild(finalMessage);
    contentDiv.appendChild(resetButton);
}

function toggleGameButtons() {
    console.log(buttons[0].disabled)
    if(buttons[0].disabled === false) {
        buttons.forEach((btn) => btn.disabled = true);
    } else {
        buttons.forEach((btn) => btn.disabled = false);
    }
}