import math

def searchMatrix(matrix, target):
  COL_LEN = len(matrix[0])
  s = 0
  e = COL_LEN * len(matrix) - 1
  
  while (s <= e):
    m = math.floor((s + e) / 2)
    v = getFromMatrix(m, COL_LEN, matrix)
    if v > target:
      e = m - 1
    elif v < target:
      s = m + 1
    else:
      return True
  return False
  
def getFromMatrix(n, COL_LEN, matrix):
  j = n % COL_LEN
  i = math.floor(n / COL_LEN)
  return matrix[i][j]
