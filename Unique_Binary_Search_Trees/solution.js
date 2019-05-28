/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const dp = {};
  dp[0] = dp[1] = 1;
  dp[2] = 2;
  dp[3] = 5;
  return dfs(n, dp);
};

function dfs(n, dp) {
  if (dp[n] > 0) return dp[n];
  
  let s = 0;
  let root = 0;
  let e = n - 1;
  let num = 0;
  while (root < n) {
    num += dfs(root - s, dp) * dfs(e - root, dp);
    root++;
  }
  dp[n] = num;
  return num; 
}
