'use strict';

let secreatNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent =
      'Not entered any number😑😑';
  } else if (guess === secreatNumber) {
    document.querySelector('.message').textContent = '🎉🎉correct🎉🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secreatNumber;
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secreatNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secreatNumber ? '📈📈To High' : '📈📈To Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😔😔You Lost😔😔';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreatNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
});
