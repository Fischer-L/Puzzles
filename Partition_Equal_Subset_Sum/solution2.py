class Solution:
    def __init__(self):
      self._dp = {}
  
    def canPartition(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        total = sum(nums)
        if total % 2 != 0: return False
        
        half = total // 2
        for v in nums:
          if v > half: return False
          
        return self._canPartition(half, nums, len(nums)-1)
      
    def _canPartition(self, target, nums, i):
      if target in self._dp: return self._dp[target]
      
      can = False
      
      if target == 0:
        can = True
      elif target > 0 and i > 0:
        can = self._canPartition(target - nums[i], nums, i - 1)
        if not can:
          can = self._canPartition(target, nums, i - 1)          
        
      self._dp[target] = can
      return can
