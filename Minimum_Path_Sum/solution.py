class Solution:
    def minPathSum(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        ROW = len(grid) if grid else 0
        COL = len(grid[0]) if ROW > 0 else 0
        
        if ROW == 0 or COL == 0: return 0
        
        for r in range(ROW):
            for c in range(COL):
                top = r - 1
                left = c - 1
                here = grid[r][c]
                
                if top >= 0 and left >= 0:
                    here = min(here + grid[top][c], here + grid[r][left])
                elif top >= 0:
                    here = here + grid[top][c]
                elif left >= 0:
                    here = here + grid[r][left]
                grid[r][c] = here
        return grid[ROW-1][COL-1]
