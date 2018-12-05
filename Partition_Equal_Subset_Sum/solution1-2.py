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
        dp = [False] * (half + 1)
        dp[0] = True
        
        for v in nums:
          if v > half: return False
          
          for target in range(half, v-1, -1):
            dp[target] = dp[target] or dp[target - v]
          
          if dp[half]: return True
        return False
