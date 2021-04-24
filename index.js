'use strict'

let kdoJeNaTahu = 'circle';
const btnElm = document.querySelectorAll('.game_area--btn');

const hrac = document.querySelector('.player')

const Hraje = () => {
  return `<p class="player">Hraje: <img class="circle"src="${kdoJeNaTahu}svg"alt="circle"></p>`;
};

hrac.innerHTML = Hraje(kdoJeNaTahu);

