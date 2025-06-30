document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('gameBoard');
    const status = document.getElementById('gameStatus');
    const restartBtn = document.getElementById('restartBtn');
    let currentPlayer = 'X';
    let gameActive = true;
    let gameState = ["", "", "", "", "", "", "", "", ""];
  
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    function createBoard() {
      board.innerHTML = '';
      gameState = ["", "", "", "", "", "", "", "", ""];
      currentPlayer = 'X';
      gameActive = true;
      status.textContent = `Player ${currentPlayer}'s turn`;
  
      for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.addEventListener('click', handleCellClick);
        board.appendChild(cell);
      }
    }
  
    function handleCellClick(e) {
      const index = e.target.dataset.index;
      if (!gameActive || gameState[index] !== "") return;
  
      gameState[index] = currentPlayer;
      e.target.textContent = currentPlayer;
  
      if (checkWin()) {
        status.textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
        return;
      }
  
      if (!gameState.includes("")) {
        status.textContent = "It's a draw!";
        gameActive = false;
        return;
      }
  
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      status.textContent = `Player ${currentPlayer}'s turn`;
    }
  
    function checkWin() {
      return winningConditions.some(condition => {
        const [a, b, c] = condition;
        return (
          gameState[a] &&
          gameState[a] === gameState[b] &&
          gameState[a] === gameState[c]
        );
      });
    }
  
    restartBtn.addEventListener('click', createBoard);
  
    createBoard(); // Initialize game
  });
  