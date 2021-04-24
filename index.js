'use strict'

let kdoJeNaTahu = 'circle';
const btnElm = document.querySelectorAll('.game_area--btn');

const hrac = document.querySelector('.player')

const Hraje = () => {
  return `<p class="player">Hraje: <img class="${kdoJeNaTahu}"src="images/${kdoJeNaTahu}.svg"alt="${kdoJeNaTahu}"></p>`;
};

hrac.innerHTML = Hraje(kdoJeNaTahu);

for (let i = 0; i < btnElm.length; i+=1) {
  btnElm[i].addEventListener('click', () => {
  if (kdoJeNaTahu === 'circle') {
    btnElm[i].classList.add('pole-circle');
    kdoJeNaTahu = 'cross';
  } else {
    btnElm[i].classList.add('pole-cross');
    kdoJeNaTahu = 'circle';
  }

  hrac.innerHTML = Hraje();

});
  

};