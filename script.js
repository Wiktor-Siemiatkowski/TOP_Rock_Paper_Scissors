// Get random int in range 1-3 from computer, assign that int to a variable for later comaprison.
let compChoice = 0;

function getComputerChoice () {
    min = 1;
    max = 3;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

compChoice = getComputerChoice();

console.log(compChoice);
//Get user choice of rock paper or scissors
let userChoice = prompt("Choose Rock, Paper or Scissors: ");

if (userChoice.toLowerCase() === 'rock') {
    userChoice = 1
} else if (userChoice.toLowerCase() === 'paper') {
    userChoice = 2
} else if (userChoice.toLowerCase() === 'scissors') {
    userChoice = 3
} else {
    alert('Please select a right choice.')
};

console.log(userChoice);

//Comparison function, listing all possible ties, wins and loses.
function playOneround () {
    if (compChoice === userChoice) {
        alert('It\'s a tie!')
    } else if (compChoice === 1 && userChoice === 2 || compChoice === 2 && userChoice === 3 || compChoice === 3 && userChoice === 1) {
        alert('You have won!')
    } else if (compChoice === 1 && userChoice === 3 || compChoice === 2 && userChoice === 1 || compChoice === 3 && userChoice === 2) {
        alert('You have lost!')
    }
}

playOneround();
