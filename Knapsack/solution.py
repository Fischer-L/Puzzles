class Solution:
  def maxKanpsack(self, capacity, vals, weights):
    itemCount = len(vals)
    dp = self._createDP(itemCount + 1, capacity + 1)
    
    for i in range(1, itemCount + 1):
      offsetIndex = i - 1
      for subCap in range(1, capacity + 1):
        sum1 = dp[i-1][subCap]

        sum2 = 0
        remainder = subCap - weights[offsetIndex]
        if remainder >= 0:
          sum2 = vals[offsetIndex] + dp[i-1][remainder]
        
        dp[i][subCap] = max(sum1, sum2)
    return dp[itemCount][capacity]

  def _createDP(self, rows, cols):
    return [ [0] * cols for i in range(rows) ]
