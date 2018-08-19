/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const ROW = grid ? grid.length : 0;
    const COL = ROW > 0 ? grid[0].length : 0;
    
    if (ROW == 0 || COL == 0) return 0;
    
    for (let r = 0; r < ROW; r++) {
        for (let c = 0; c < COL; c++) {
            let top = r - 1;
            let left = c - 1;
            let here = grid[r][c];
            
            if (top >= 0 && left >= 0) {
                here = Math.min(here + grid[top][c], here + grid[r][left]);
            } else if (top >= 0) {
                here = here + grid[top][c];
            } else if (left >= 0) {
                here = here + grid[r][left];
            }
            grid[r][c] = here;
        }
    }
    return grid[ROW-1][COL-1];
};
