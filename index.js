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
    if (isWinningMove(btnElm[i]) === true) {
      setTimeout(() => {
        confirm('Vyhrálo kolečko. Chceš hrát znovu?')
        {
          location.reload();
        }
      }, 200);
    }
    
  } else {
    btnElm[i].classList.add('pole-cross');
    kdoJeNaTahu = 'circle';
    btnElm[i].setAttribute('disabled', true);
    if (isWinningMove(btnElm[i]) === true) {
      setTimeout(() => {
        confirm('Vyhrál křížek. Chceš hrát znovu?')
        {
          location.reload();
        }
      }, 200);
     }
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
  // doleva
	i = origin.column;
	while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
		inRow++
		i--
	}

// doprava
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

  // nahoru
	i = origin.row
	while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
		inColumn++
		i--
	}

// dolu
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

  // diagonála

  let diagonalaX = 1;
  let row = origin.row;
  let column = origin.column;


 // diagonála vpravo dolu
  while (row < boardSize -1 && column < boardSize -1 && symbol === getSymbol(getField(row + 1, column + 1))) {
    diagonalaX++;
    row++;
    column++;
  }

  row = origin.row;
  column = origin.column;
 // diagonála vlevo nahoru chyba
  while (row > 0 && column > 0 && symbol === getSymbol(getField(row - 1, column - 1))) {
    diagonalaX++;
    row--;
    column--;
  }


  if (diagonalaX >= symbolsToWin) {
    return true
  }

  let diagonalaY = 1;
  row = origin.row;
  column = origin.column;
   // diagonála vpravo nahoru chyba
   while (row > 0 && column < boardSize - 1 && symbol === getSymbol(getField(row - 1, column + 1))) {
    diagonalaY++;
    row--;
    column++;
  }

   // diagonála vlevo dolu
  row = origin.row;
  column = origin.column;
  while (row < boardSize - 1 && column > 0 && symbol === getSymbol(getField(row + 1, column - 1))) {
    diagonalaY++;
    row++;
    column--;
  }



  if (diagonalaY >= symbolsToWin) {
    return true
  }

	return false
};
