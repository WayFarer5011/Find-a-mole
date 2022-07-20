'use strict';

let mole = document.querySelector('.game__img');
let time = document.querySelector('.time');
let startBtn = document.querySelector('.btn__start');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let modalScore = document.querySelector('.score');
let modalStartAgain = document.querySelector('.again');

let highscore = 0;


let counter = document.querySelector('.counter'),
 count = 0;
mole.onclick = function() {
  count += 1;

  counter.innerHTML = 'SCORE: ' + count;
  modalScore.innerHTML = '' + count;
};

startBtn.addEventListener('click', function() {
  mole.classList.remove('hidden');
  startBtn.classList.add('hidden');

  let startingMinutes = .5;
  let timeCount = startingMinutes * 60;

let refresh = setInterval(updateCountdown, 1000)

function updateCountdown() {
  let minutes = Math.floor(timeCount / 60);
  let seconds = timeCount % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;

  time.innerHTML = `${minutes}:${seconds}`;
  timeCount--;

  if(timeCount < 0) {
    clearInterval(refresh);
    mole.classList.add('hidden');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    startBtn.classList.remove('hidden');


    if(count >  highscore) {
      highscore = count;
      document.querySelector('.highscore').textContent = 'HIGHSCORE: ' + highscore;
    }
  }
};
});




let randomNumber;  
let randomNumber2;

 mole.addEventListener('click', function() {
  randomNumber = Math.trunc(Math.random() * 21) + 1;
  randomNumber2 = Math.trunc(Math.random() * 50) + 2;

  mole.style.marginTop = `${randomNumber}%`;

  mole.style.marginRight = `${randomNumber2}%`;

  //mole.style.marginBottom = `${randomNumber2}%`;

  mole.style.marginLeft = `${randomNumber}%`;
 });


modalStartAgain.addEventListener('click', function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  counter.textContent = 'SCORE: 0';
  //mole.classList.remove('hidden');
  count = 0;
});