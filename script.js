// Get random int in range 1-3 from computer, assign that int to a variable for later comaprison.
let compChoice = null;
let userChoice = null;
let compScore = 0;
let userScore = 0;
const showScore = document.querySelector('.score');
const choiceRock = document.querySelector('.rock');
const choicePaper = document.querySelector('.paper');
const choiceScissors = document.querySelector('.scissors'); 



function getComputerChoice () {
    min = 1;
    max = 3;
    return compChoice = Math.floor(Math.random() * (max - min + 1) + min);
}

function getWinner() {
    userChoice = e.target.class;
    getComputerChoice();
    if (compChoice == userChoice) {
        console.log('Tie');
    }}

choiceRock.addEventListener('click', () => {
    userChoice = 1;
})

choicePaper.addEventListener('click', () => {
    userChoice = 2;
})

choiceScissors.addEventListener('click', () => {
    userChoice = 3;
})
