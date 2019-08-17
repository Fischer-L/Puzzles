class Solution:
    def allCellsDistOrder(self, R: int, C: int, r0: int, c0: int) -> List[List[int]]:
      distances = {}
      for r in range(R):
        for c in range(C):
          d = abs(r - r0) + abs(c - c0)
          if d not in distances: distances[d] = []
          cells = distances[d]
          cells.append([ r, c ])
      
      ans = []
      for d in range(R + C - 1):
        if d in distances:
          cells = distances[d]
          for cell in cells: ans.append(cell)
      return ans
        
