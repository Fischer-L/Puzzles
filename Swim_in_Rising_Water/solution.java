class Solution {
  public int swimInWater(int[][] grid) {
      return this.swimByDijsktra(grid);
  }
    
  public int swimByDijsktra(int[][] grid) {
    final int L = grid == null ? 0 : grid.length;
    if (L == 0) return -1;
    
    PriorityQueue<Cell> pq = new PriorityQueue<Cell>(L, new Comparator<Cell>() {
      @Override
      public int compare(Cell a, Cell b) { return a.time - b.time; }
    });
    Cell[][] map = this.buildMap(L, grid);
    Cell exit = map[L-1][L-1];
    Cell min = map[0][0];
    while (min != null) {
      min.done = true;
      Cell[] neighbors = this.getNeighbors(min.r, min.c, L, map);
      for (Cell c : neighbors) {
        if (c == null || c.done) continue;
        if (min.time < c.time) c.time = min.time;
        int required = grid[c.r][c.c];
        if (c.time < required) c.time = required;
        if (!pq.contains(c)) pq.add(c);
      }
      min = pq.poll();
      if (min == exit) min = null;
    }
    return map[L-1][L-1].time;
  }
  
  private Cell[][] buildMap(int L, int[][] grid) {
    Cell[][] map = new Cell[L][L];
    for (int r = 0; r < L; ++r) {
      for (int c = 0; c < L; ++c) map[r][c] = new Cell(r, c);
    }
    map[0][0].time = grid[0][0];
    return map;
  }
  
  private Cell[] nbs = new Cell[4];
    
  private Cell[] getNeighbors(int r, int c, int L, Cell[][] map) {
    this.nbs[0] = r-1 >= 0 ? map[r-1][c] : null;
    this.nbs[1] = r+1 < L ? map[r+1][c] : null;
    this.nbs[2] = c-1 >= 0 ? map[r][c-1] : null;
    this.nbs[3] = c+1 < L ? map[r][c+1] : null;
    return this.nbs;
  }
    
  static class Cell {
    public Cell(int r, int c) {
      this.r = r; this.c = c;
    }
    public boolean done = false;
    public int r = -1;
    public int c = -1;
    public int time = Integer.MAX_VALUE;
  }
}
