class Solution {
    public void solve(char[][] board) {
        final int ROW = board == null ? 0 : board.length;
        final int COL = ROW > 0 ? board[0].length : 0;
        if (ROW == 0 || COL == 0) return;
        
        for (int c = 0; c < COL; c++) {
            this.traverseBoard(board, 0, c, ROW, COL);
            this.traverseBoard(board, ROW-1, c, ROW, COL);
        }
        for (int r = 1; r < ROW-1; r++) {
            this.traverseBoard(board, r, 0, ROW, COL);
            this.traverseBoard(board, r, COL-1, ROW, COL);
        }
        for (int r = 0; r < ROW; r++) {
            for (int c = 0; c < COL; c++) {
                board[r][c] = board[r][c] == 'A' ? 'O' : 'X';
            }
        }
    }
    
    private void traverseBoard(char[][] board, int r, int c, final int ROW, final int COL) {
        if (r < 0 || r >= ROW || c < 0 || c >= COL) return;
        if (board[r][c] == 'O') {
            board[r][c] = 'A';
            this.traverseBoard(board, r-1, c, ROW, COL);
            this.traverseBoard(board, r+1, c, ROW, COL);
            this.traverseBoard(board, r, c-1, ROW, COL);
            this.traverseBoard(board, r, c+1, ROW, COL);
        }
    }
}
