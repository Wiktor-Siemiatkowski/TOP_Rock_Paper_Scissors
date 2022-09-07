// Get random int in range 1-3 from computer, assign that int to a variable for later comaprison.
let compChoice = null;
let userChoice = null;
let compScore = 0;
let userScore = 0;
const outcomemsg = document.querySelector('.outcome')
const showScore = document.querySelector('.score');
const choiceRock = document.querySelector('.rock');
const choicePaper = document.querySelector('.paper');
const choiceScissors = document.querySelector('.scissors'); 



function getComputerChoice () {
    min = 1;
    max = 3;
    return compChoice = Math.floor(Math.random() * (max - min + 1) + min);
}

function playOneRound () {

    getComputerChoice();

    if (compChoice === userChoice) {
        outcomemsg.textContent = 'It\'s a tie!'
    } else if (compChoice === 1 && userChoice === 2 || compChoice === 2 && userChoice === 3 || compChoice === 3 && userChoice === 1) {
        outcomemsg.textContent = 'You\'ve won!'
        userScore++
    } else if (compChoice === 1 && userChoice === 3 || compChoice === 2 && userChoice === 1 || compChoice === 3 && userChoice === 2) {
        outcomemsg.textContent = 'You\'ve lost!'
        compScore++
    }
    showScore.textContent = `Your score --> ${userScore} ${compScore} <-- AI score`;
}

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

