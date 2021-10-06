// import functions and grab DOM elements
import { didUserWin, randomChoice } from './functions.js';
// initialize global state
const playButton = document.getElementById('play');
const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const tieSpan = document.getElementById('ties');
const error = document.getElementById('error');
const results = document.getElementById('results');
const resetButton = document.getElementById('reset');
const restartSpan = document.getElementById('restarts');
const refreshText = document.getElementById('refresh');

let ties = 0;
let wins = 0;
let losses = 0;
let restarts = 0;
// set event listeners 
playButton.addEventListener('click', () => {
    const selectedChoice = document.querySelector('input[type=radio]:checked');

    if (!selectedChoice) {
        return error.classList.remove('hidden');
    }

    error.classList.add('hidden');

    const userChoice = selectedChoice.value;
    const compChoice = randomChoice();
    console.log(compChoice);
    if (userChoice === compChoice) {
        ties ++;
        results.textContent = 'You Tied';
    } else if (didUserWin(userChoice, compChoice)) {
        wins++;
        results.textContent = 'You Win!';
    } else {
        losses++;
        results.textContent = 'You Lose';
    }

    resetButton.classList.remove('hidden');
    refreshText.classList.remove('hidden');
    tieSpan.textContent = ties;
    winSpan.textContent = wins;
    lossSpan.textContent = losses;
});

resetButton.addEventListener('click', () => {
    ties = 0;
    wins = 0;
    losses = 0;
    tieSpan.textContent = '0';
    winSpan.textContent = '0';
    lossSpan.textContent = '0';
    restarts++;
    restartSpan.textContent = restarts;


});