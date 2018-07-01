class Solution:
    def maximalSquare(self, matrix):
        """
        :type matrix: List[List[str]]
        :rtype: int
        """
        if not matrix: return 0
        
        MAX_ROW, MAX_COL = len(matrix), len(matrix[0])
        MAX = max(MAX_ROW, MAX_COL)
        length  = 0
        for r in range(MAX_ROW):
            for c in range(MAX_COL):
                length = max(length, self._calMAX(matrix, r, c, MAX_ROW, MAX_COL))
                if length == MAX: return length * length
        return length * length
    
    def _calMAX(self, matrix, sRow, sCol, MAX_ROW, MAX_COL):
        eRow = sRow
        eCol = sCol
        while eRow < MAX_ROW and eCol < MAX_COL:
            zero = False
            
            for r in range(sRow, eRow+1):
                zero = matrix[r][eCol] == '0'
                if zero: break
            if zero: break
                
            for c in range(sCol, eCol+1):
                zero = matrix[eRow][c] == '0'
                if zero: break
            if zero: break
            
            eRow += 1
            eCol += 1
        return eRow - sRow
                
                
