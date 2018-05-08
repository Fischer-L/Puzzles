class Solution {
    public int swimInWater(int[][] grid) {
        return this.swimByDijsktra(grid);
    }
  public int swimByDijsktra(int[][] grid) {
    final int L = grid == null ? 0 : grid.length;
    if (L == 0) return -1;
    
    Cell[][] map = this.buildMap(L);
    Cell exit = map[L-1][L-1];
    Cell min = map[0][0];
    min.time = grid[0][0];
    while (min != null) {
      min.done = true;
      Cell[] neighbors = this.getNeighbors(min.r, min.c, L, map);
      for (Cell c : neighbors) {
        if (c == null || c.done || c.time > exit.time) continue;
        if (min.time < c.time) c.time = min.time;
        int required = grid[c.r][c.c];
        if (c.time < required) c.time = required;
        if (c != exit && c.time < exit.time) this.pushCell(c);
      }
      min = this.popCell();
    }
    return map[L-1][L-1].time;
  }
  
  private Cell[][] buildMap(int L) {
    Cell[][] map = new Cell[L][L];
    for (int r = 0; r < L; ++r) {
      for (int c = 0; c < L; ++c) map[r][c] = new Cell(r, c);
    }
    return map;
  }
  
  private Cell[] getNeighbors(int r, int c, int L, Cell[][] map) {
    Cell[] nbs = new Cell[4];
    if (r-1 >= 0) nbs[0] = map[r-1][c];
    if (r+1 < L) nbs[1] = map[r+1][c];
    if (c-1 >= 0) nbs[2] = map[r][c-1];
    if (c+1 < L) nbs[3] = map[r][c+1];
    return nbs;
  }
  
  private ArrayList<Cell> pendingCells = new  ArrayList<Cell>();
  
  private Cell popCell() {
    if (this.pendingCells.size() == 0) return null;
    Cell c = this.pendingCells.get(0);
    this.pendingCells.remove(0);
    return c;
  }
  
  private void pushCell(Cell c) {
    int s = 0;
    int e = this.pendingCells.size() - 1;
    if (e < 0) this.pendingCells.add(c);
    
    while (s < e) {
        int m = (s + e) / 2;
        int t = this.pendingCells.get(m).time;
        if (c.time > t) {
            s = m + 1;
        } else if (c.time < t) {
            e = m - 1;
        } else {
            s = e = m;
        }
    }
    
    int t = this.pendingCells.get(s).time;
    if (c.time >= t) this.pendingCells.add(s+1, c);
    else this.pendingCells.add(s, c);
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
