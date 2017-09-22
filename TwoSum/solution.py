class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        diffMap = {}
        for i in range(len(nums)):
            x = nums[i]
            if x in diffMap: return [ diffMap[x], i ]
            diff = target - x
            if diff not in diffMap: diffMap[diff] = i
