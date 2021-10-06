// import functions and grab DOM elements
import { didUserWin, randomChoice } from './functions.js';
// initialize global state
const playButton = document.getElementById('play');
const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const tieSpan = document.getElementById('ties');
const error = document.getElementById('error');

let ties = 0;
let wins = 0;
let losses = 0;
// set event listeners 
playButton.addEventListener('click', () => {
    const selectedChoice = document.querySelector('input[type=radio]:checked');
    
    if (!selectedChoice) {
        return error.classList.remove('hidden');
    }

    error.classList.add('hidden');

    const userChoice = selectedChoice.value;
    const compChoice = randomChoice();

    if (userChoice === compChoice) {
        ties ++;
    } else if (didUserWin(userChoice, compChoice)) {
        wins++;
    } else {
        losses++;
    }

    tieSpan.textContent = ties;
    winSpan.textContent = wins;
    lossSpan.textContent = losses;
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
