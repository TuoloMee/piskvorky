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
    btnElm[i].setAttribute('disabled', true);
    
  } else {
    btnElm[i].classList.add('pole-cross');
    kdoJeNaTahu = 'circle';
    btnElm[i].setAttribute('disabled', true);
  }

  hrac.innerHTML = Hraje();

});
  

};

const getSymbol = (field) => {
	if (field.classList.contains('pole-cross')) {
		return 'cross'
	} else if (field.classList.contains('pole-circle')) {
		return 'circle'
	}
};

const boardSize = 10
const fields = document.querySelectorAll('.game_area--btn')
const getField = (row, column) => fields[row * boardSize + column]

const getPosition = (field) => {
	let fieldIndex = 0
	while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
		fieldIndex++
	}

	return {
		row: Math.floor(fieldIndex / boardSize),
		column: fieldIndex % boardSize,
	}
}

const symbolsToWin = 5;
const isWinningMove = (field) => {
	const origin = getPosition(field);
	const symbol = getSymbol(field);

	let i;

	let inRow = 1;
	i = origin.column;
	while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
		inRow++
		i--
	}


	i = origin.column
	while (
		i < boardSize - 1 &&
		symbol === getSymbol(getField(origin.row, i + 1))
	) {
		inRow++
		i++
	}

	if (inRow >= symbolsToWin) {
		return true
	}

	let inColumn = 1

	i = origin.row
	while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
		inColumn++
		i--
	}


	i = origin.row
	while (
		i < boardSize - 1 &&
		symbol === getSymbol(getField(i + 1, origin.column))
	) {
		inColumn++
		i++
	}

	if (inColumn >= symbolsToWin) {
		return true
	}

	return false
};
