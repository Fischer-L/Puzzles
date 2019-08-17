class Solution {
  public int[][] allCellsDistOrder(int R, int C, int r0, int c0) {
    int rStep = 0;
    int cStep = 0;
    int rEnd = 0;
    int cEnd = 0;
    if (r0 >= R / 2) {
      rStep = -1;
      rEnd = 0;
    } else {
      rStep = 1;
      rEnd = R - 1;
    }
    if (c0 >= C / 2) {
      cStep = -1;
      cEnd = 0;
    } else {
      cStep = 1;
      cEnd = C - 1;
    }
    
    int i = 0;
    int[][] ans = new int[R * C][2];
    ans[i][0] = r0;
    ans[i][1] = c0;
    int r = 0;
    int c = 0;
    int rAxis = r0;
    boolean reachEnd = false;
    while (!reachEnd) {
      rAxis += rStep;
      r = rAxis;
      c = c0;
      i = this.pushCellsIntoAns(r, c, r0, c0, R, C, i, ans);
      reachEnd = r == rEnd && c == cEnd;
      while (!reachEnd && r != r0 && 0 <= c && c < C) {
        r -= rStep;
        c += cStep;
        i = this.pushCellsIntoAns(r, c, r0, c0, R, C, i, ans);
        reachEnd = r == rEnd && c == cEnd;
      }
    }
    return ans;
  }
  
  int pushCellsIntoAns (int r, int c, int r0, int c0, int R, int C, int i, int[][]ans) {
    if (0 > r || r >= R || 0 > c || c >= C) return i;
    
    int [][] multipliers;
    if (r == r0) {
      multipliers = this.rAxisMultipliers;
    } else if (c == c0) {
      multipliers = this.cAxisMultipliers;
    } else {
      multipliers = this.multipliers;
    }
    
    int rOffset = r - r0;
    int cOffset = c - c0;
    for (int[] multiplier : multipliers) {
      int rCell = rOffset * multiplier[0] + r0;
      int cCell = cOffset * multiplier[1] + c0;
      if (0 <= rCell && rCell < R &&
          0 <= cCell && cCell < C
      ) {
        i++;
        ans[i][0] = rCell;
        ans[i][1] = cCell;
      }
    }
    return i;
  }
  
  private int[][] rAxisMultipliers = {
    { 1, 1 }, { 1, -1 }
  };
  private int[][] cAxisMultipliers = {
    { 1, 1 }, { -1, 1 }
  };
  private int[][] multipliers = {
    { 1, 1 }, { 1, -1 }, { -1, 1 }, { -1, -1 }
  };
}
