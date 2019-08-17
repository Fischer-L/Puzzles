class Solution {
  public int[][] allCellsDistOrder(int R, int C, int r0, int c0) {
    final int MAX = R + C - 1;
    int distancesR[][] = new int[MAX][R * C];
    int distancesC[][] = new int[MAX][R * C];
    for (int r = 0; r < R; r++) {
      for (int c = 0; c < C; c++) {
        int d = Math.abs(r - r0) + Math.abs(c - c0);
        int cellsR[] = distancesR[d];
        int cellsC[] = distancesC[d];
        int iR = cellsR[0];
        int iC = cellsC[0];
        cellsR[++iR] = r + 1;
        cellsC[++iC] = c + 1;
        cellsR[0] = iR;
        cellsC[0] = iC;
      }
    }
    
    int i = 0;
    int ans[][] = new int[R * C][2];
    for (int d = 0; d < MAX; d++) {
      int cellsR[] = distancesR[d];
      int cellsC[] = distancesC[d];
      for (int j = 1; j < cellsR.length; j++) {
        if (cellsR[j] == 0) break;
        ans[i][0] = cellsR[j] - 1;
        ans[i][1] = cellsC[j] - 1;
        i++;
      }
    }
    return ans;
  }
}
