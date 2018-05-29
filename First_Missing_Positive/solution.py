class Solution:
    def firstMissingPositive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n = 0
        idx = 0
        L = len(nums) if nums != None else 0
        
        for i in range(L):
            n = nums[i]
            while 1 <= n and n <= L:
                idx = n - 1
                n = nums[idx]
                nums[idx] = sys.maxsize
        
        for i in range(L):
            if nums[i] != sys.maxsize: return i + 1
        return L + 1
        
