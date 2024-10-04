'use strict';
let secretNumber = Math.floor(Math.random()*20)+1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
   const inputNumber = Number(document.querySelector('.number-input').value);

   if(!inputNumber){
      document.querySelector('.gess-message').textContent = 'Enter a number';
   } else if(inputNumber === secretNumber){
      document.querySelector('.gess-message').textContent = 'Congratulations!!!';
      document.querySelector('.question').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = 'green';
      if (score > highscore){
         highscore = score;
         document.querySelector('.highscore').textContent = score;
      }
   } else if(inputNumber!==secretNumber){
      if (score>1){
      inputNumber > secretNumber? document.querySelector('.gess-message').textContent = 'Try a smaller number' : document.querySelector('.gess-message').textContent = 'Try a greater number';
      score--;
      document.querySelector('.score').textContent = score;
      } else{
         document.querySelector('.gess-message').textContent = 'Game over';
         document.querySelector('.score').textContent = 0;
      }
   }
});


