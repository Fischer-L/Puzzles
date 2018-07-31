class Solution:
    def numIslands(self, grid):
        """
        :type grid: List[List[str]]
        :rtype: int
        """
        maxRow = len(grid) if grid else 0
        maxCol = len(grid[0]) if maxRow else 0
        
        ans = 0
        for r in range(maxRow):
            for c in range(maxCol):
                if grid[r][c] == '1':
                    ans += 1
                    self._explore(grid, r, c, maxRow, maxCol)
        return ans
        
    def _explore(self, grid, r, c, maxRow, maxCol):
        if r < 0 or r >= maxRow or c < 0 or c >= maxCol: return
        if grid[r][c] != '1': return
        grid[r][c] = ' '
        self._explore(grid, r-1, c, maxRow, maxCol)
        self._explore(grid, r+1, c, maxRow, maxCol)
        self._explore(grid, r, c-1, maxRow, maxCol)
        self._explore(grid, r, c+1, maxRow, maxCol)
