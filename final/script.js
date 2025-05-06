const boardSize = 5;
let board = [];

function createBoard() {
  const boardDiv = document.getElementById('game-board');
  boardDiv.innerHTML = '';

  for (let row = 0; row < boardSize; row++) {
    board[row] = [];
    for (let col = 0; col < boardSize; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.row = row;
      cell.dataset.col = col;
      cell.addEventListener('click', handleClick);
      board[row][col] = cell;
      boardDiv.appendChild(cell);
    }
  }
}

function toggleCell(row, col) {
  if (row >= 0 && row < boardSize && col >= 0 && col < boardSize) {
    board[row][col].classList.toggle('is-off');
  }
}

function handleClick(e) {
  const row = parseInt(e.target.dataset.row);
  const col = parseInt(e.target.dataset.col);

  toggleCell(row, col);
  toggleCell(row - 1, col);
  toggleCell(row + 1, col);
  toggleCell(row, col - 1);
  toggleCell(row, col + 1);

  if (checkWin()) {
    setTimeout(() => alert('You win!'), 100);
  }
}

function checkWin() {
  return board.flat().every(cell => !cell.classList.contains('is-off'));
}

function randomizeBoard() {
  for (let i = 0; i < 15; i++) {
    const row = Math.floor(Math.random() * boardSize);
    const col = Math.floor(Math.random() * boardSize);
    board[row][col].click(); // simulate a click for a solvable board
  }
}

createBoard();
randomizeBoard();
