// Select DOM Elements
const playToSelect = document.body.querySelector('#play-to');
const playerOneScoreSpan = document.body.querySelector('#player-one-score');
const playerTwoScoreSpan = document.body.querySelector('#player-two-score');
const playerOneBtn = document.body.querySelector('#player-one-btn');
const playerTwoBtn = document.body.querySelector('#player-two-btn');
const resetBtn = document.body.querySelector('#reset-btn');
const winMessage = document.body.querySelector('#win-message');

// Global variables
let playTo = 5;
let playerOneScore = 0;
let playerTwoScore = 0;

playToSelect.addEventListener("change", function(e) {
    playTo = parseInt(e.target.value);
    resetGame();
})

function gameOver() {
    winMessage.style.display = "block";
    playerOneBtn.removeEventListener("click", playerOneScores);
    playerTwoBtn.removeEventListener("click", playerTwoScores);
    playerOneBtn.setAttribute("disabled", "");
    playerTwoBtn.setAttribute("disabled", "");
}

function playerOneScores() {
    playerOneScore++;
    playerOneScoreSpan.innerHTML = playerOneScore;
    if(playerOneScore >= playTo && playerOneScore > playerTwoScore + 1) {
        winMessage.innerText = "Player One Wins!";
        gameOver();
    }
}

function playerTwoScores() {
    playerTwoScore++;
    playerTwoScoreSpan.innerHTML = playerTwoScore;
    if(playerTwoScore >= playTo && playerTwoScore > playerOneScore + 1) {
        winMessage.innerText = "Player Two Wins!";
        gameOver();
    }
}

function resetGame() {
    winMessage.style.display = "none";
    playerOneBtn.removeAttribute("disabled");
    playerTwoBtn.removeAttribute("disabled");
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneScoreSpan.innerHTML = 0;
    playerTwoScoreSpan.innerHTML = 0;
    playerOneBtn.addEventListener("click", playerOneScores);
    playerTwoBtn.addEventListener("click", playerTwoScores);
}

playerOneBtn.addEventListener("click", playerOneScores);
playerTwoBtn.addEventListener("click", playerTwoScores);
resetBtn.addEventListener("click", resetGame);