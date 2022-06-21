'use strict';
const displayMsg = function(message) {
    document.querySelector('.message').textContent = message
}
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

let btn = document.querySelector('.check');
let btnReload = document.querySelector('.again');
btn.addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMsg('No number!');
    } else if (guess === secretNumber) {
        displayMsg('Correct number');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMsg(guess > secretNumber ? 'Too hight!' : 'Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMsg('You lose the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
})
btnReload.addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    displayMsg('Start guessing...');
    document.querySelector('.score').textContent = score;
});
