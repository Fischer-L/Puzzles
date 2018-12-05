class Solution {
  public boolean canPartition(int[] nums) {
  	int total = 0;
    for (int v : nums) total += v;
    
    if (total % 2 != 0) return false;
    
    int half = total / 2;
    final int L = nums.length; 
    boolean[] dp = new boolean[half+1];
    dp[0] = true;
    
    for (int i = 0; i < L; i++) {
      int v = nums[i];
      if (v > half) return false;
      
      for (int sum = half; sum >= v; sum--) {
        dp[sum] = dp[sum] || dp[sum - v];
      }
      if (dp[half]) return true;
    }
    return false;
  }
}
