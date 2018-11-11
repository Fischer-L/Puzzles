class Solution:
  def __init__(self):
    self._numMap = {}
  
  def combinationSum4(self, nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: int
    """
    nums.sort()
    return self._calcPossibelNum(nums, target)
        
  def _calcPossibelNum(self, nums, target):
    if target == 0: return 1
    
    if target in self._numMap: return self._numMap[target]
    
    num = 0
    for v in nums:
      if v <= target: num += self._calcPossibelNum(nums, target-v)
    self._numMap[target] = num
    return num
    
