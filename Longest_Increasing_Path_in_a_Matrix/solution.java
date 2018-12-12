class Solution {
  public int longestIncreasingPath(int[][] matrix) {
    int MAX_ROW = matrix == null ? 0 : matrix.length;
    int MAX_COL = MAX_ROW == 0 ? 0 : matrix[0].length;
    int[][] dp = new int[MAX_ROW][MAX_COL];
    int longest = 0;
    for (int row = 0; row < MAX_ROW; row++) {
      for (int col = 0; col < MAX_COL; col++) {
        longest = Math.max(longest, this.search(Integer.MIN_VALUE, dp, matrix, row, col, MAX_ROW, MAX_COL));
      }
    }
    return longest;
  }
  
  private int search(int preValue, int[][] dp, int[][] matrix, int row, int col, int MAX_ROW, int MAX_COL) {
    if (row < 0 || row >= MAX_ROW) return 0;
    if (col < 0 || col >= MAX_COL) return 0;
    
    int value = matrix[row][col];
    if (preValue >= value) return 0;
    
    if (dp[row][col] > 0) return dp[row][col];
    
    int path = 0;
    path = Math.max(path, this.search(value, dp, matrix, row-1, col, MAX_ROW, MAX_COL));
    path = Math.max(path, this.search(value, dp, matrix, row+1, col, MAX_ROW, MAX_COL));
    path = Math.max(path, this.search(value, dp, matrix, row, col-1, MAX_ROW, MAX_COL));
    path = Math.max(path, this.search(value, dp, matrix, row, col+1, MAX_ROW, MAX_COL));
    dp[row][col] = 1 + path;
    return dp[row][col];
  }
}
