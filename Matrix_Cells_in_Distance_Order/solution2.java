class Solution {
  public int[][] allCellsDistOrder(int R, int C, int r0, int c0) {
    Map<Integer, Deque<int[]>> distances = new HashMap<>(R + C - 2);
    for (int r = 0; r < R; r++) {
      for (int c = 0; c < C; c++) {
        int d = Math.abs(r - r0) + Math.abs(c - c0);
        Deque<int[]> cells = distances.get(d);
        if (cells == null) {
          cells = new ArrayDeque<>();
          distances.put(d, cells);
        }
        cells.push(new int[] { r, c });
      }
    }
    
    int i = 0;
    int ans[][] = new int[R * C][2];
    final int MAX = distances.size();
    for (int d = 0; d < MAX; d++) {
      Deque<int[]> cells = distances.get(d);
      for (int[] cell : cells) ans[i++] = cell;
    }
    return ans;
  }
}
