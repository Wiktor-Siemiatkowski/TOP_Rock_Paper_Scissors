// Get random int in range 1-3 from computer, assign that int to a variable for later comaprison.
let compChoice = 0;

function getComputerChoice () {
    min = 1;
    max = 3;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

compChoice = getComputerChoice();

//Get user choice of rock paper or scissors
let userChoice = prompt("Choose Rock, Paper or Scissors: ");

if (userChoice === 'Rock') {
    userChoice = 1
} else if (userChoice === 'Paper') {
    userChoice = 2
} else if (userChoice === 'Scissors') {
    userChoice = 3
} else {
    alert('Please select a right choice.')
};
