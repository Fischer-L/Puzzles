class Solution:
    def rob(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        p1 = 0
        p2 = 0
        current = 0
        for i in range(len(nums)):
            current = max(p1, nums[i] + p2)
            p2 = p1
            p1 = current
        return p1
        
