class Solution:
    def rob(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        L = len(nums)
        if L == 1: return nums[0]
        return max(self._robByRange(nums, 0, L-2), self._robByRange(nums, 1, L-1))
        
    def _robByRange(self, nums, s, e):
        p1 = 0
        p2 = 0
        current = 0
        for i in range(s, e + 1):
            current = max(p1, p2 + nums[i])
            p2 = p1
            p1 = current
        return current
        
