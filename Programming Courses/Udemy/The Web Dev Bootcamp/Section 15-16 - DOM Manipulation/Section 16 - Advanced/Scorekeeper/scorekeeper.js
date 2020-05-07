var player1 = document.querySelector("#p1");
var player2 = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var reset = document.getElementById("reset");
var numInput = document.querySelector("input[type='number']");
var scoreDisplay = document.getElementById("winningScore");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

player1.addEventListener("click", () => {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

player2.addEventListener("click", () => {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

function resetScore() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    gameOver = false;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
}

reset.addEventListener("click", () => {
    resetScore();
});

numInput.addEventListener("change", () => {
    scoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    resetScore();
});
