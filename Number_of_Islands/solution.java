class Solution {
    public int numIslands(char[][] grid) {
        final int maxRow = grid != null ? grid.length : 0;
        final int maxCol = maxRow > 0 ? grid[0].length : 0;
        
        int ans = 0;
        for (int r = 0; r < maxRow; r++) {
            for (int c = 0; c < maxCol; c++) {
                char land = grid[r][c];
                if (land == '1') {
                    ans++;
                    this.explore(grid, r, c, maxRow, maxCol);
                }
            }
        }
        return ans;
    }
    
    private void explore(char[][]grid, int r, int c, int maxRow, int maxCol) {
        if (r < 0 || r >= maxRow || c < 0 || c >= maxCol) return;
        if (grid[r][c] != '1') return;
        grid[r][c] = ' ';
        this.explore(grid, r-1, c, maxRow, maxCol);
        this.explore(grid, r+1, c, maxRow, maxCol);
        this.explore(grid, r, c-1, maxRow, maxCol);
        this.explore(grid, r, c+1, maxRow, maxCol);
    }
}
