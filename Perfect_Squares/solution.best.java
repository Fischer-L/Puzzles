class Solution {
  
  private int[] dp;
  private Integer[] squares;
  
  public int numSquares(int n) {
    if (n <= 0) return 0;
    
    Integer[] squares = this.createSquares(n);
    int[] dp = this.createDP(n);
    
    for (int i = 5; i <= n; i++) {
      int j = 0;
      int sq = squares[j];
      while (i >= sq) {
        dp[i] = Math.min(dp[i - sq] + 1, dp[i]);
        j++;
        if (dp[i] == 1 || j >= squares.length) break;
        sq = squares[j];
      }
    } 
    return dp[n];
  }
  
  private int[] createDP(int n) {
    int[] dp = new int[n + 5];
    Arrays.fill(dp, Integer.MAX_VALUE);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 3;
    dp[4] = 1;
    return dp;
  }
  
  
  private Integer[] createSquares(int n) {
    ArrayList<Integer> list = new ArrayList<>();
    int i = 1;
    int sq = 1;
    while (sq <= n) {
      list.add(sq);
      i++;
      sq = i * i;
    }
    return list.toArray(new Integer[list.size()]);
  }
}
