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
})

playerOneBtn.addEventListener("click", function() {
    playerOneScore++;
    playerOneScoreSpan.innerHTML = playerOneScore;
    if(playerOneScore === playTo) {
        winMessage.innerText = "Player One Wins!";
        showAndFadeOutWinMessage();
        resetGame();
    }
})

playerTwoBtn.addEventListener("click", function() {
    playerTwoScore++;
    playerTwoScoreSpan.innerHTML = playerTwoScore;
    if(playerTwoScore === playTo) {
        winMessage.innerText = "Player Two Wins!";
        showAndFadeOutWinMessage();
        resetGame();
    }
})

resetBtn.addEventListener("click", resetGame);

function showAndFadeOutWinMessage() {
    winMessage.classList.add("fade-out");

    setTimeout(function() {
        winMessage.classList.remove("fade-out");
        winMessage.innerText = "";
    }, 2000);
}

function resetGame() {
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneScoreSpan.innerHTML = 0;
    playerTwoScoreSpan.innerHTML = 0;
}