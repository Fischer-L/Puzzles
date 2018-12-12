// Long execution time version
class Solution {
  private int longest = 0;
  
  public int longestIncreasingPath(int[][] matrix) {
    int MAX_ROW = matrix == null ? 0 : matrix.length;
    int MAX_COL = MAX_ROW == 0 ? 0 : matrix[0].length;
    for (int row = 0; row < MAX_ROW; row++) {
      for (int col = 0; col < MAX_COL; col++) {
        if (!this.isVisitedSmaller(matrix, row, col, MAX_ROW, MAX_COL)) {
          this.search(Integer.MIN_VALUE, 0, matrix, row, col, MAX_ROW, MAX_COL);
        }
      }
    }
    return this.longest;
  }
  
  private boolean isVisitedSmaller(int[][] matrix, int row, int col, int MAX_ROW, int MAX_COL) {
    int value = matrix[row][col];
    int i = row - 1;
    int j = col;
    if ((0 <= i && i < MAX_ROW) && (0 <= j && j < MAX_COL)) {
      if (matrix[i][j] < value) return true;
    }
    i = row;
    j = col - 1;
    if ((0 <= i && i < MAX_ROW) && (0 <= j && j < MAX_COL)) {
      if (matrix[i][j] < value) return true;
    }
    return false;
  }
  
  private void search(int preValue, int path, int[][] matrix, int row, int col, int MAX_ROW, int MAX_COL) {
    if (row < 0 || row >= MAX_ROW) return;
    if (col < 0 || col >= MAX_COL) return;
    
    int value = matrix[row][col];
    if (value <= preValue) return;
    
    path++;
    this.longest = Math.max(this.longest, path);
    
    matrix[row][col] = Integer.MIN_VALUE;
    this.search(value, path, matrix, row-1, col, MAX_ROW, MAX_COL);
    this.search(value, path, matrix, row+1, col, MAX_ROW, MAX_COL);
    this.search(value, path, matrix, row, col-1, MAX_ROW, MAX_COL);
    this.search(value, path, matrix, row, col+1, MAX_ROW, MAX_COL);
    matrix[row][col] = value;
  }
}
