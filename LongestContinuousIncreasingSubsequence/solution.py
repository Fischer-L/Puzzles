class Solution(object):
    def findLengthOfLCIS(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums) == 0: return 0
        prev = None
        current = longest = 0
        for i in nums:
            current = current + 1 if prev != None and prev < i else 0
            if current > longest: longest = current
            prev = i
        return longest + 1
        
