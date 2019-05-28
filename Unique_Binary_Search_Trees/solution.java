class Solution {
  
  private int[] dp;
  
  public int numTrees(int n) {
    dp = new int[ Math.max(n + 1, 4) ];
    dp[0] = dp[1] = 1;
    dp[2] = 2;
    dp[3] = 5;
    return _numTrees(n);
  }
  
  private int _numTrees(int n) {
    if (dp[n] > 0) return dp[n];
    int s = 0;
    int root = 0;
    int e = n - 1;
    int num = 0;
    int numOfLeftTrees = 0;
    int numOfRightTrees = 0;
    while (root < n) {
      numOfLeftTrees = _numTrees(root - s);
      numOfRightTrees = _numTrees(e - root);
      num += numOfLeftTrees * numOfRightTrees;
      root++;
    }
    dp[n] = num;
    return num;
  }
}
