const totalScore = { playerScore: 0, computerScore: 0 };

function getComputerChoice() {
  let rpsChoice = ["Rock", "Scissors", "Paper"];
  let randomNumber = Math.floor(Math.random() * 3);
  return rpsChoice[randomNumber];
}

function getResult(playerChoice, computerChoice) {
  let score;

  if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1;
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    score = 1;
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1;
  } else if (playerChoice === computerChoice) {
    score = 0;
  } else {
    score = -1;
  }
  return score;
}

function showResult(score, playerChoice, computerChoice) {
  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("player-score");

  if (score == 1) {
    resultDiv.innerText = "You Win!";
  } else if (score == -1) {
    resultDiv.innerText = "You Lose!";
  } else {
    resultDiv.innerText = "You Draw!";
  }

  handsDiv.innerText = `👨: ${playerChoice} - Vs - 💻: ${computerChoice}`;

  playerScoreDiv.innerText = `Your Score: ${totalScore["playerScore"]}`;
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  totalScore["playerScore"] += score;

  showResult(score, playerChoice, computerChoice);
}

function playGame() {
  const rpsButtons = document.querySelectorAll(".rpsButton");

  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  });

  const endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => endGame(totalScore);
}

function endGame(totalScore) {
  totalScore["playerScore"] = 0;
  totalScore["computerScore"] = 0;

  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("player-score");

  resultDiv.innerText = "";
  handsDiv.innerText = "";
  playerScoreDiv.innerText = "";
}

playGame();
