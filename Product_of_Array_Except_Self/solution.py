class Solution:
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        
    def _solution1(self, nums):
        """
        Calculate all products then divide the i-th value for the output[i].
        This solution has to watch out the zero value case
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
        
