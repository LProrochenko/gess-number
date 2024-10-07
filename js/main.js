'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const inputNumber = Number(document.querySelector('.number-input').value);
  document.querySelector('.number-input').value = '';
  document.querySelector('.number-input').focus();


  if (!inputNumber) {
    document.querySelector('.gess-message').textContent = 'Enter a number';
  } else if (inputNumber === secretNumber) {
    document.querySelector('.gess-message').textContent = 'Congratulations!!!';
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.check').classList.add('disabled');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (inputNumber !== secretNumber) {

    if (score > 1) {

      if (inputNumber > secretNumber) {
        document.querySelector('.gess-message').textContent =
          `Try a smaller number than ${inputNumber}`;
      } else {
        document.querySelector('.gess-message').textContent = `Try a greater number than ${inputNumber}`;
      }
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.gess-message').textContent = 'Game over';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#000';
  document.querySelector('.gess-message').textContent = 'Start guessing';
  document.querySelector('.question').textContent = '???';
  document.querySelector('.number-input').value = '';
  document.querySelector('.check').classList.remove('disabled');
});

