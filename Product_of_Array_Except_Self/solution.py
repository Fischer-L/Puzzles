class Solution:
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        zeroCount = 0
        allProducts = 1
        numsLen = len(nums)
        for i in range(numsLen): 
            n = nums[i]
            if n == 0:
                zeroCount += 1
            else:
                allProducts *= n
                
        if zeroCount > 1:
            return [0] * numsLen
        elif zeroCount == 1:
            return [ allProducts if nums[i] == 0 else 0 for i in range(numsLen) ]
        else:
            return [ int(allProducts/nums[i]) for i in range(numsLen) ]
        
