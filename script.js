'use strict';


//state variables holds data relevant to the application
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.guess').value = '';

//Functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

//------------Handling Clicks - Event Listener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //-----When there is no input
  if (!guess) {
    displayMessage('💀 No Number');
  }

  //-----When Player wins the Game
  else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //-----When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage((guess > secretNumber) ? '👆 Too High!' : '👇Too Low!');
      // if (guess > secretNumber) {
      //   document.querySelector('.message').textContent = '👆 Too High!';
      // } else if (guess < secretNumber) {
      //   document.querySelector('.message').textContent = '👇 Too Low!';
      // }
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You Lost the Game!');
      document.querySelector('.score').textContent = 0;
    }
  }

});
document.querySelector('.again').addEventListener('click', function () {
  //-----AGAIN BUTTON FUNCTION
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});