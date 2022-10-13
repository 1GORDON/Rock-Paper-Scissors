
// computerPlay which randomly returns "Rock", "Paper", or "Scissors"
const computer = ['Rock', 'Paper', 'Scissors'];
const computerPlay = () => {
    return computer[Math.floor(Math.random() * computer.length)];
}



// Function that accept two paramenters
const playerSelection = window.prompt("Please Enter Value!");

const playGame = (playerSelection, computerSelection) => {
    const convertedArray =  computer.map(value => value.toLowerCase())
    if(convertedArray.includes(playerSelection.toLowerCase())){
        if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
            console.log(`You Win!:`);
        } else {
            console.log(`You Lose!: ${computerSelection} beats ${playerSelection}`);
        }
    }
     else {
        console.log("You Entered a wrong Value");
    }
}

playGame(playerSelection, computerPlay());