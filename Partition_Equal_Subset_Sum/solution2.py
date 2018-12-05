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
        newDp = []
        dp = { 0: True }
        
        for v in nums:
          if v > half: return False
          
          for (target, i) in dp.items():
            newTarget = target + v
            if newTarget <= half and newTarget not in dp:
              newDp.append(newTarget)
              
          for newTarget in newDp: dp[newTarget] = True
          newDp = []
          
          if half in dp: return True
        return False
            
