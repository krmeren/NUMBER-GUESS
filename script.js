'use strict';

let highScore = 0;
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const checkBtn = document.querySelector('.check');
const againBtn = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};
const winCon = function () {
  displayMessage('CORRECT NUMBER!!!');
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.number').style.width = '30rem';
  if (score > highScore) {
    document.querySelector('.highscore').textContent = score;
  }
};
const loseCon = function () {
  displayMessage('You Lost!');
  document.querySelector('.score').textContent = 0;
  document.querySelector('body').style.backgroundColor = '#FF0000';
};
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  switch (guess) {
    case secretNumber:
      winCon();
      break;
  }
  //WHEN GUESS IS WRONG
  if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      displayMessage(guess > secretNumber ? 'Try lower!' : 'Try higher!');
      document.querySelector('.score').textContent = score;
    } else {
      loseCon();
    }
  }
});
document.querySelector('.again').addEventListener('click', againBtn);
