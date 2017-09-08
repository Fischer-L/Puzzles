class Solution(object):
  def islandPerimeter(self, grid):
    """
    :type grid: List[List[int]]
    :rtype: int
    """
    perimeter = 0
    area = None
    self.grid = grid
    self.rowCount = len(grid)
    self.colCount = len(grid[0])
    for row in range(self.rowCount):
      for col in range(self.colCount):
        area = grid[row][col]
        if area == 1:
          perimeter += 4
          if self._isLand(row - 1, col): perimeter -= 1
          if self._isLand(row + 1, col): perimeter -= 1
          if self._isLand(row, col - 1): perimeter -= 1
          if self._isLand(row, col + 1): perimeter -= 1
    return perimeter

  def _isLand(self, row, col):
    return (0 <= row and row <= self.rowCount - 1 and
            0 <= col and col <= self.colCount - 1 and
            self.grid[row][col] == 1)
