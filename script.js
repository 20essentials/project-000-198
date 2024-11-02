const container1 = document.querySelector('.container-1');
const container2 = document.querySelector('.container-2');

const N_SQUARES = 6000;

function addSquares(container, N_SQUARES) {
  for (let i = 0; i < N_SQUARES; i++) {
    const $square = document.createElement('div');
    $square.classList.add('square');
    container.appendChild($square);
  }
}

addSquares(container1, N_SQUARES);
addSquares(container2, N_SQUARES);
