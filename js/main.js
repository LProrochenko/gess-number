'use strict';

// Initial data
let secretNumber = getRandomNumber();
let score = 20;
let highscore = 0;

// Nodes
const bodyNode = document.querySelector('body');
const scoreNode = document.querySelector('.score');
const highscoreNode = document.querySelector('.highscore');
const gessMessageNode = document.querySelector('.gess-message');
const questionNode = document.querySelector('.question');
const numberInputNode = document.querySelector('.number-input');
const checkNode = document.querySelector('.check');

// Listeners
checkNode.addEventListener('click', function () {
  const inputNumber = Number(numberInputNode.value);
  numberInputNode.value = '';

  if (!inputNumber) {
    displayGessMessage('Enter a number');
    numberInputNode.focus();
  } else if (inputNumber === secretNumber) {
    displayGessMessage('Congratulations!!!');
    questionNode.textContent = secretNumber;
    bodyNode.style.backgroundColor = 'green';
    disabledControls();

    if (score > highscore) {
      highscore = score;
      highscoreNode.textContent = score;
    }
  } else {
    if (score > 1) {
      numberInputNode.focus();

      if (inputNumber > secretNumber) {
        displayGessMessage(`Try a smaller number than ${inputNumber}`);
      } else {
        displayGessMessage(`Try a greater number than ${inputNumber}`);
      }

      score--;
      scoreNode.textContent = score;
    } else {
      displayGessMessage('Game over');
      scoreNode.textContent = 0;
      disabledControls();
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = getRandomNumber();
  score = 20;

  scoreNode.textContent = score;
  bodyNode.style.backgroundColor = '#000';
  displayGessMessage('Start guessing');
  questionNode.textContent = '???';
  numberInputNode.value = '';
  checkNode.classList.remove('disabled');
  numberInputNode.classList.remove('disabled');
});

// Functions
function displayGessMessage(message) {
  gessMessageNode.textContent = message;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

function disabledControls() {
  numberInputNode.classList.add('disabled');
  checkNode.classList.add('disabled');
}
