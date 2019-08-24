class Solution:
  def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
    countMap = [0] * 1001
    
    for v in arr1: countMap[v] += 1
      
    i = 0
    for v in arr2:
      for j in range(countMap[v]):
        arr1[i] = v
        i += 1
      countMap[v] = 0
    
    for v in range(1001):
      for j in range(countMap[v]):
        arr1[i] = v
        i += 1
    
    return arr1
