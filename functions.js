export function didUserWin(userChoice, compChoice) {
    if (userChoice === 'rock' && compChoice === 'scissors') {
        return true;
    } else if (userChoice === 'paper' && compChoice === 'rock') {
        return true;
    } else if (userChoice === 'scissors' && compChoice === 'paper') {
        return true;
    } else {
        return false;
    }
}

export function randomChoice() {
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
}