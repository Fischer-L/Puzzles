public class Solution
{
  public int maxKnapsack(int capacity, int[] vals, int[] weights)
  {
    int itemCount = vals.length;
    int[][] dp = new int[itemCount+1][capacity+1];
   	
    for (int i = 1; i <= itemCount; i++) {
      for (int subCap = 1; subCap <= capacity; subCap++) {
        int sum1 = dp[i-1][subCap];
        
        int sum2 = 0;
        int offsetIndex = i - 1;
        int remainder = subCap - weights[offsetIndex];
        if (remainder >= 0) {
          sum2 = vals[offsetIndex] + dp[i-1][remainder];
        }
        
        dp[i][subCap] = Math.max(sum1, sum2);
      }
    }
    
    return dp[itemCount][capacity];
  }
}
