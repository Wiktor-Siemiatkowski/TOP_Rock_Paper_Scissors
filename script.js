//variables for choice and score
let compChoice = null;
let userChoice = null;
let compScore = 0;
let userScore = 0;
//DOM modifiers
const btns = document.querySelectorAll('.btn')
const outcomemsg = document.querySelector('.outcome')
const showScore = document.querySelector('.score');
const choiceRock = document.querySelector('.rock');
const choicePaper = document.querySelector('.paper');
const choiceScissors = document.querySelector('.scissors'); 


//Random number for AI choice
function getComputerChoice () {
    min = 1;
    max = 3;
    return compChoice = Math.floor(Math.random() * (max - min + 1) + min);
}

//function for ending the game and displaying final results
function gameOver() {
if (userScore === 5 || compScore === 5) {
    btns.forEach((element) => {
        element.setAttribute('disabled', '');
    });
    if (userScore > compScore) {
        outcomemsg.textContent = 'Congratulations, you\'ve won the game!';
    } else {
        outcomemsg.textContent = 'Sorry, you\'ve lost the game.'
    }
}}

//main gameplay function
function playOneRound () {

    getComputerChoice();

    if (compChoice === userChoice) {
        outcomemsg.textContent = 'It\'s a tie!'
    } else if (compChoice === 1 && userChoice === 2 
        || compChoice === 2 && userChoice === 3 
        || compChoice === 3 && userChoice === 1) {
        outcomemsg.textContent = 'You\'ve won!'
        userScore++
    } else if (compChoice === 1 && userChoice === 3 
        || compChoice === 2 && userChoice === 1 
        || compChoice === 3 && userChoice === 2) {
        outcomemsg.textContent = 'You\'ve lost!'
        compScore++
    }
    showScore.textContent = `Your score --> ${userScore} ${compScore} <-- AI score`;
    gameOver();
}

//user choice with click
choiceRock.addEventListener('click', () => {
    userChoice = 1;
    playOneRound();
})

choicePaper.addEventListener('click', () => {
    userChoice = 2;
    playOneRound();
})

choiceScissors.addEventListener('click', () => {
    userChoice = 3;
    playOneRound();
})

