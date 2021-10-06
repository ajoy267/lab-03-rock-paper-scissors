export function didUserWin(userChoice, compChoice) {
    if (userChoice === compChoice) {
        return 'tie';
    } 
    if (userChoice === 'rock' && compChoice === 'scissors') {
        return 'win';
    } else if (userChoice === 'paper' && compChoice === 'rock') {
        return 'win';
    } else if (userChoice === 'scissors' && compChoice === 'paper') {
        return 'win';
    } else {
        return 'lose';
    }
}

export function randomChoice() {
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
}