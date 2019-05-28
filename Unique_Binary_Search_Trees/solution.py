class Solution:
    def numTrees(self, n: int) -> int:
      self.dp = {}
      self.dp[0] = self.dp[1] = 1
      self.dp[2] = 2
      self.dp[3] = 5
      return self._numTrees(n)
    
    def _numTrees(self, n: int) -> int:
      if n in self.dp: return self.dp[n]
      
      s = 0
      root = 0
      e = n - 1
      num = 0
      while root < n:
        num += self._numTrees(root - s) * self._numTrees(e - root)
        root += 1
      self.dp[n] = num
      return num
      
