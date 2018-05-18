class Solution:
    def solve(self, board):
        """
        :type board: List[List[str]]
        :rtype: void Do not return anything, modify board in-place instead.
        """
        ROW = len(board) - 1 if board != None else -1
        COL = len(board[0]) - 1 if ROW >= 0 else -1
        if ROW < 0 or COL < 0: return
        
        for c in range(COL+1):
            self._traverseBoard(board, 0, c, ROW, COL)
            self._traverseBoard(board, ROW, c, ROW, COL)
            
        for r in range(1, ROW):
            self._traverseBoard(board, r, 0, ROW, COL)
            self._traverseBoard(board, r, COL, ROW, COL)
            
        for r in range(ROW+1):
            for c in range(COL+1):
                letter = board[r][c]
                if letter == "A": board[r][c] = "O"
                elif letter == "O": board[r][c] = "X"
                
    
    def _traverseBoard(self, board, r, c, ROW, COL):
        if r < 0 or r > ROW or c < 0 or c > COL: return
        if board[r][c] == "O":
            board[r][c] = "A"
            self._traverseBoard(board, r-1, c, ROW, COL)
            self._traverseBoard(board, r+1, c, ROW, COL)
            self._traverseBoard(board, r, c-1, ROW, COL)
            self._traverseBoard(board, r, c+1, ROW, COL)
