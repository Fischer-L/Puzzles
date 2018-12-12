class Solution:
    def longestIncreasingPath(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: int
        """
        if not matrix or not matrix[0]: return 0
        
        longest = 0
        MAX_ROW, MAX_COL = len(matrix), len(matrix[0])
        dp = [ [0] * MAX_COL for i in range(MAX_ROW) ]
        
        for row in range(MAX_ROW):
          for col in range(MAX_COL):
            longest = max(longest, self._search(-sys.maxsize, dp, matrix, row, col, MAX_ROW, MAX_COL))
        return longest
    
    def _search(self, preValue, dp, matrix, row, col, MAX_ROW, MAX_COL):
      if row < 0 or row >= MAX_ROW: return 0
      if col < 0 or col >= MAX_COL: return 0
      
      value = matrix[row][col]
      if preValue >= value: return 0
      
      if dp[row][col] > 0: return dp[row][col]
      
      path = max(
        self._search(value, dp, matrix, row-1, col, MAX_ROW, MAX_COL),
        self._search(value, dp, matrix, row+1, col, MAX_ROW, MAX_COL),
        self._search(value, dp, matrix, row, col-1, MAX_ROW, MAX_COL),
        self._search(value, dp, matrix, row, col+1, MAX_ROW, MAX_COL))
      dp[row][col] = 1 + path
      return dp[row][col]
    
