class Solution:
    def findDisappearedNumbers(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        L = len(nums)
        for i in range(L):
            k = abs(nums[i]) - 1
            v = nums[k]
            if v > 0: nums[k] = -1 * v;
                
        missing = []
        for i in range(L):
            if nums[i] > 0: missing.append(i + 1)
                
        return missing
