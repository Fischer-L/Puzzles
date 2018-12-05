/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let total = nums.reduce((total, v) => total + v, 0);
  if (total % 2 !== 0) return false;
  
  let half = total / 2;
  let dp = [ true ];
  
  for (let v of nums) {
    if (v > half) return false;
    
    for (let sum = half; sum >= v; sum--) {
      dp[sum] = dp[sum] || dp[sum - v];
    }
    
    if (dp[half]) return true;
  }
  return false;
};
