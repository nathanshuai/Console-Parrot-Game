'use strict';

const callSound = new Audio(' ./assets/audio/Parrotcalls.mp3');
callSound.type = 'audio/mp3';

const calmSound = new Audio(' ./assets/audio/Parrotcalm.mp3');
calmSound.type = 'audio/mp3';


const call = document.querySelector('.calls');
const calm = document.querySelector('.calms');
const parrot = document.querySelector('.parrot');

call.addEventListener('click', () => {
  parrot.style.visibility = 'visible';
  callSound.play();
})

calm.addEventListener('click', () => {
  parrot.classList.add('anim');
  setTimeout(() => {parrot.classList.remove('anim')}, 800);
  calmSound.play();
})