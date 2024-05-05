import words from '../wordBank.js';

let word = '';
let guessedLetters = [];
let incorrectGuesses = 0;

function selectWord(difficulty) {
    const wordList = words[difficulty];
    word = wordList[Math.floor(Math.random() * wordList.length)];
}

function guessLetter(letter) {
    if (guessedLetters.includes(letter)) {
        return; // Letter already guessed
    }
    guessedLetters.push(letter);
    if (!word.includes(letter)) {
        incorrectGuesses++;
    }
}

function displayWord(word, guessedLetters) {
    let displayedWord = '';
    for (let char of word) {
        if (guessedLetters.includes(char) || char === ' ' || char === ',' || char === ':' || char === ';' || char === '.' || char === '!') {
            displayedWord += char;
        } else {
            displayedWord += '_';
        }
    }
    return displayedWord;
}

function getDisplayWord() {
    return displayWord(word, guessedLetters);
}

function buildHangman(incorrectGuesses) {
    let hangman = '';
    switch (incorrectGuesses) {
        case 1:
            hangman = 'O';
            break;
        case 2:
            hangman = 'O\n|';
            break;
        case 3:
            hangman = ' O\n/|';
            break;
        case 4:
            hangman = ' O\n/|\\';
            break;
        case 5:
            hangman = ' O\n/|\\ \n/';
            break;
        case 6:
            hangman = ' O\n/|\\ \n/ \\';
            break;
        default:
            break;
    }
    return hangman;
}

function isGameOver() {
    return !getDisplayWord().includes('_') || incorrectGuesses >= 6; // Hangman has 6 body parts
}

export { selectWord, guessLetter, getDisplayWord, isGameOver, buildHangman };
