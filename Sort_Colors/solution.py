class Solution:
    def sortColors(self, nums):
        """
        :type nums: List[int]
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        L = -1 if not nums else len(nums)
        if L <= 1: return
        
        i = 0
        first1s = 0
        first2s = L
        while i < first2s:
            n = nums[i]
            if n == 0:
                nums[i], nums[first1s] = nums[first1s], nums[i]
                first1s += 1
            elif n == 2:
                first2s -= 1
                nums[i], nums[first2s] = nums[first2s], nums[i]
                i -= 1
            i += 1
