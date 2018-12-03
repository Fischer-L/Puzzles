class Solution {
  public boolean canPartition(int[] nums) {
  	int sum = 0;
    for (int v : nums) sum += v;
    
    if (sum % 2 != 0) return false;
    
    int half = sum / 2;
    for (int v : nums) if (v > half) return false;
    
    final int L = nums.length; 
    int[][] dp = new int[L+1][half+1];
    
    for (int i = 1; i <= L; i++) {
      
      int v = nums[i-1];
      
      for (int target = 1; target <= half; target++) {
        
        int remainder = target - v;
        
        if (remainder == 0) {
          dp[i][target] = 1;
        } else {
          dp[i][target] = dp[i-1][target];
          if (remainder > 0 && dp[i][target] == 0) {
            dp[i][target] = dp[i-1][remainder];
          }
        }
      }
      
      if (dp[i][half] == 1) return true;
    }
    return false;
  }
}
