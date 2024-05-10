import { selectWord, guessLetter, getDisplayWord, isGameOver, guessedLetters, incorrectGuesses } from './hangman.js';

const difficulty = 'medium'; // Set the initial difficulty level
selectWord(difficulty);

const wordDisplay = document.getElementById('word-display');
const guessedLettersDisplay = document.getElementById('guessed-letters');
const hangmanDisplay = document.getElementById('hangman');

function updateDisplay() {
    wordDisplay.textContent = getDisplayWord();
    guessedLettersDisplay.textContent = `Guessed Letters: ${guessedLetters.join(', ')}`;
    hangmanDisplay.textContent = `Incorrect Guesses: ${incorrectGuesses}`;
}

function handleGuess(event) {
    const letter = event.key.toLowerCase();
    if (/[a-z]/.test(letter)) {
        guessLetter(letter);
        updateDisplay();
        if (isGameOver()) {
            // Display game over message
            const message = document.createElement('h2');
            message.textContent = 'Game over. Maybe next time!';
        }
    }
}

document.addEventListener('keydown', handleGuess);
updateDisplay();
