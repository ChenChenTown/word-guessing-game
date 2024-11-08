const words = ['adult'];
const selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedWord = '_'.repeat(selectedWord.length).split('');
let attempts = selectedWord.length + 3;

function updateDisplay() {
  document.getElementById('wordDisplay').innerText = guessedWord.join(' ');
}

function makeGuess() {
  const guessInput = document.getElementById('guessInput');
  const guess = guessInput.value;
  guessInput.value = '';

  if (guess.length !== 1) {
    alert('Please guess one letter at a time.');
    return;
  }

  let correctGuess = false;
  for (let i = 0; i < selectedWord.length; i++) {
    if (selectedWord[i] === guess) {
      guessedWord[i] = guess;
      correctGuess = true;
    }
  }

  if (correctGuess) {
    document.getElementById('message').innerText = 'Good guess!';
  } else {
    attempts--;
    document.getElementById('message').innerText = `Wrong guess. You have ${attempts} attempts left.`;
  }

  updateDisplay();

  if (guessedWord.join('') === selectedWord) {
    document.getElementById('message').innerText = `Congratulations! You guessed the word: ${selectedWord}`;
  } else if (attempts === 0) {
    document.getElementById('message').innerText = `Out of attempts! The word was: ${selectedWord}`;
  }
}

updateDisplay();
