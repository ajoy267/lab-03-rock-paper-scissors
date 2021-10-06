// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { didUserWin } from '../functions.js';

const test = QUnit.test;

test('user: rock, comp: scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('user: paper, comp: rock', (expect) => {
    const expected = true;
    
    const actual = didUserWin('paper', 'rock');

    expect.equal(actual, expected);
});

test('user: scissors, comp: paper', (expect) => {
    const expected = true;
    
    const actual = didUserWin('scissors', 'paper');

    expect.equal(actual, expected);
});

test('user: paper, comp: scissors', (expect) => {
    const expected = false;
    
    const actual = didUserWin('paper', 'scissors');

    expect.equal(actual, expected);
});

test('user: rock, comp: paper', (expect) => {
    const expected = false;
    
    const actual = didUserWin('rock', 'paper');

    expect.equal(actual, expected);
});

test('user: scissors, comp: rock', (expect) => {
    const expected = false;
    
    const actual = didUserWin('scissors', 'rock');

    expect.equal(actual, expected);
});