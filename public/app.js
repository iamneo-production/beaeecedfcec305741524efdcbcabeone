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

// Function to handle player moves
const ticTacToe = (index) => {
    // Check if the cell is already filled or if the game is won
    if (cells[index] === '' && result.textContent === '') {
        // Update the cell with the current player's symbol
        cells[index] = currentPlayer;
        btns[index].textContent = currentPlayer;
        
        // Check for winning conditions
        for (const condition of conditions) {
            const [a, b, c] = condition;
            if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                result.textContent = `Player ${currentPlayer} wins!`;
                // Disable all buttons
                btns.forEach(btn => btn.disabled = true);
                return;
            }
        }
        
        // Check for a draw
        if (cells.every(cell => cell !== '')) {
            result.textContent = "It's a draw!";
            return;
        }
        
        // Switch players
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        
        // Display the current player's turn
        result.textContent = `Player ${currentPlayer}'s Turn`;
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
