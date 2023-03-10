'use strict';
const generateRandomNumber = (min,max) =>Math.trunc(Math.random()*(max - min) + min) + 1;

let randomNumberEl = document.getElementById('random_number');
randomNumberEl.textContent = '?';

let messeageEl = document.querySelector('.message');
messeageEl.textContent = 'Start the game by clicking a number...';

let remainingAttemptsEl = document.getElementById('remaining_attempts');
remainingAttemptsEl.textContent = '50';

randomNumberEl.textContent = generateRandomNumber(0,10);
// messeageEl.textcontent = 'Start the game by clicking a number...';
// remainingAttemptsEl.textcontent = remainingAttempts;


// for(let i = 0; i < numberElements.length;i++){
//     const numberEl = numberElements[i];
    
//     numberEl.addEventListener('click', function(){
//         remainingAttempts--;
//         remainingAttemptsEl.textcontent = remainingAttempts;
//     })
// }