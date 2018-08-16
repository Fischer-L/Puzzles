class Solution {
    public int minPathSum(int[][] grid) {
        final int ROW = grid != null ? grid.length : 0;
        final int COL = ROW > 0 ? grid[0].length : 0;
        
        if (ROW * COL == 0) return 0;
        
        for (int r = 0; r < ROW; r++) {
            for (int c = 0; c < COL; c++) {
                int top = r - 1;
                int left = c - 1;
                int here = grid[r][c];
                if (top >= 0 && left >= 0) {
                    grid[r][c] = Math.min(
                        here + grid[top][c], here + grid[r][left]
                    );
                } else if (top >= 0) {
                    grid[r][c] = here + grid[top][c];
                } else if (left >= 0) {
                    grid[r][c] = here + grid[r][left];
                }
            }
        }
        
        return grid[ROW-1][COL-1];
    }
}
