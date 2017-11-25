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
        

    def _solution2(self, nums):
        """
        First loop, for the output[i], calculate the products on the left side.
        Second loop, for the output[i], calculate the products on the right side multiplied the products on the left side
        """
        numsLen = len(nums)
        ans = [1] * numsLen
        leftProducts = 1
        for i in range(1, numsLen):
           leftProducts = ans[i] = leftProducts * nums[i - 1]
            
        rightProducts = 1
        for i in range(numsLen - 2, -1, -1):
            rightProducts = rightProducts * nums[i + 1]
            ans[i] *= rightProducts
        
        return ans
    
