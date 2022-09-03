let compChoice = 0;

function getComputerChoice () {
    min = 1;
    max = 3;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

compChoice = getComputerChoice();

console.log(compChoice);
