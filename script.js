// Get random int in range 1-3 from computer, assign that int to a variable for later comaprison.
let compChoice = null;

function getComputerChoice () {
    min = 1;
    max = 3;
    return compChoice = Math.floor(Math.random() * (max - min + 1) + min);
}

//Get user choice of rock paper or scissors

let userChoice = null;

function getUserChoice() {
userChoice = prompt("Choose Rock, Paper or Scissors: ");

if (userChoice.toLowerCase() === 'rock') {
    userChoice = 1
} else if (userChoice.toLowerCase() === 'paper') {
    userChoice = 2
} else if (userChoice.toLowerCase() === 'scissors') {
    userChoice = 3
} else {
    console.log('Please select a right choice.')
};
}

//Score variables

let compScore = 0;
let userScore = 0;

//Comparison function, listing all possible ties, wins and loses.
function playOneRound () {

    getComputerChoice();
    getUserChoice();

    if (compChoice === userChoice) {
        console.log('It\'s a tie!')
    } else if (compChoice === 1 && userChoice === 2 || compChoice === 2 && userChoice === 3 || compChoice === 3 && userChoice === 1) {
        console.log('You have won!')
        userScore++
    } else if (compChoice === 1 && userChoice === 3 || compChoice === 2 && userChoice === 1 || compChoice === 3 && userChoice === 2) {
        console.log('You have lost!')
        compScore++
    }
}

//Loop for more rounds

function game() {
    while (userScore < 5 && compScore < 5) {
        playOneRound();
        console.log('Your score is: ' + userScore);
        console.log('Computer score is: ' + compScore);
    }

    if (userScore === 5) {
        console.log('You have won the game!')
    } else if (compScore === 5) {
        console.log('Sorry, you have lost the game!')
    }
}

game();

