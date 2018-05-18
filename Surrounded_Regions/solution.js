/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const ROW = board ? board.length-1 : -1;
    const COL = ROW >= 0 ? board[0].length-1 : -1;
    if (ROW < 0 || COL < 0) return;
    
    for (let c = 0; c <= COL; c++) {
        traverseBoard(board, 0, c, ROW, COL);
        traverseBoard(board, ROW, c, ROW, COL);
    }
    for (let r = ROW-1; r >= 1; r--) {
        traverseBoard(board, r, 0, ROW, COL);
        traverseBoard(board, r, COL, ROW, COL);
    }
    for (let r = 0; r <= ROW; r++) {
        for (let c = 0; c <= COL; c++) {
            let letter = board[r][c];
            if (letter == "A") {
                board[r][c] = "O";
            } else if (letter == "O") {
                board[r][c] = "X";
            }
        }
    }
};

function traverseBoard(board, r, c, ROW, COL) {
    if (r < 0 || r > ROW || c < 0 || c > COL) return;
    if (board[r][c] == "O") {
        board[r][c] = "A";
        traverseBoard(board, r-1, c, ROW, COL);
        traverseBoard(board, r+1, c, ROW, COL);
        traverseBoard(board, r, c-1, ROW, COL);
        traverseBoard(board, r, c+1, ROW, COL);
    }
}
