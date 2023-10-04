// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to check for winning conditions
const checkWin = () => {
    for (const condition of conditions) {
        const [a, b, c] = condition;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return cells[a];
        }
    }
    if (cells.every(cell => cell !== '')) {
        return 'draw';
    }
    return null;
};

// Function to handle player moves
const ticTacToe = (row, col) => {
    const index = row * 3 + col;

    // Check if the cell is already filled or if the game is won
    if (cells[index] === '' && result.textContent === '') {
        // Update the cell with the current player's symbol
        cells[index] = currentPlayer;
        btns[index].textContent = currentPlayer;

        // Check for a win or draw
        const winner = checkWin();
        if (winner) {
            if (winner === 'draw') {
                result.textContent = "It's a draw!";
            } else {
                result.textContent = `Player ${winner} wins!`;
            }
            // Disable all buttons
            btns.forEach(btn => btn.disabled = true);
        } else {
            // Switch players
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            // Display the current player's turn
            result.textContent = `Player ${currentPlayer}'s Turn`;
        }
    }
};

// Function to reset the game
const resetGame = () => {
    // Reset the game state
    cells = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    result.textContent = "Player X's Turn";

    // Clear the board and re-enable buttons
    btns.forEach((btn, index) => {
        btn.textContent = '';
        btn.disabled = false;
    });
};

// Add event listeners to buttons
btns.forEach((btn, i) => {
    const row = Math.floor(i / 3);
    const col = i % 3;
    btn.addEventListener('click', () => ticTacToe(row, col));
});

// Add event listener for the Reset button
const resetButton = document.querySelector('.reset-btn');
resetButton.addEventListener('click', resetGame);
