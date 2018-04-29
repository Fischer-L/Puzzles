class Solution:
    def canJump(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        maxRight = 0
        end = len(nums)
        for i in range(end):
            if i <= maxRight: maxRight = max(maxRight, i + nums[i])
            if maxRight + 1 >= end: return True
        return False
