const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissor');
const playerOptions = [rockBtn,paperBtn,scissorBtn];
const computerOptions = ['rock','paper','scissors']

const result = document.querySelector('.result');
const playerScoreBoard = document.querySelector('.player-count');
const computerScoreBoard = document.querySelector('.computer-count');
const roundsLeft = document.querySelector('.roundsleft');
const chooseMove = document.querySelector('.move');
const reloadBtn = document.querySelector('.reload');

// Complete logic of game inside this function
const game = () => {
	let playerScore = 0;
	let computerScore = 0;
	let rounds = 0;

	// Function to
	const playGame = () => {
		// Function to start playing game
		playerOptions.forEach(option => {
			option.addEventListener('click',function(){
				rounds++;
				roundsLeft.innerText = `Rounds Left: ${5-rounds}`;
				
				const computerChoice = computerOptions[Math.floor(Math.random()*3)];

				// Function to check who wins
				winner(this.innerText,computerChoice)
				
				// Calling gameOver function after 5 rounds.
				if(rounds == 5){
					gameOver(playerOptions, roundsLeft);
				}
			})
		})
	}

	// Function to decide winner
	const winner = (player,computer) => {
		player = player.toLowerCase();
		computer = computer.toLowerCase();
		if(player === computer){
			result.textContent = 'Tie'
		}
		else if(player == 'rock'){
			if(computer == 'paper'){
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;

			}else{
				result.textContent = 'Player Won'
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'scissors'){
			if(computer == 'rock'){
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Player Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'paper'){
			if(computer == 'scissors'){
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Player Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
	}

	// Function to run when game is over
	const gameOver = (playerOptions,roundsLeft) => {
		playerOptions.forEach(option => {
			option.style.display = 'none';
		})

		chooseMove.innerText = 'Game Over!!'
		roundsLeft.style.display = 'none';

		if(playerScore > computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'You Won The Game'
			result.style.color = '#308D46';
		}
		else if(playerScore < computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'You Lost The Game';
			result.style.color = 'red';
		}
		else{
			result.style.fontSize = '2rem';
			result.innerText = 'Tie';
			result.style.color = 'grey'
		}
		reloadBtn.innerText = 'Restart';
		reloadBtn.style.display = 'flex'
		reloadBtn.addEventListener('click',() => {
			window.location.reload();
		})
	}
	playGame();
}

game();
