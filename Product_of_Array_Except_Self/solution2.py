class Solution:
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """

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
    
