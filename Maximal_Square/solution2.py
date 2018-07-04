class Solution:
    def maximalSquare(self, matrix):
        """
        :type matrix: List[List[str]]
        :rtype: int
        """
        if not matrix: return 0
        
        left = 0
        maxLen = 0
        MAX_ROW = len(matrix)
        MAX_COL = len(matrix[0])
        dp = [0] * MAX_COL
        nextDP = [0] * MAX_COL
        for r in range(MAX_ROW):
            for c in range(MAX_COL):
                upper = dp[c]
                upperLeft = dp[c-1] if c > 0 else 0
                current = 0
                if matrix[r][c] == '1':
                    current = min(left, upper, upperLeft) + 1
                left = nextDP[c] = current
                maxLen = max(maxLen, current)
            left = 0
            tmp = dp
            dp = nextDP
            nextDP = tmp
        return maxLen * maxLen
        
