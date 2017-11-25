class Solution:
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        # A, B are the only 2 values appearing only once
        xorAB = 0
        numsLen = len(nums)
        for i in range(numsLen): xorAB ^= nums[i]
        
        # Find the least bit set, `leastBit` from `xorAB`
        # Divide nums into 2 groups, 
        # which one with the same bit as `leastBit` is set,
        # one with the same bit as `leastBit` is not set.
        # As a result A and B will be in different groups.
        # Then loop the 2 groups seperately to xor the values to get A and B
        leastBit = xorAB & (-xorAB)
        A = 0
        B = 0
        for i in range(numsLen):
            n = nums[i]
            if n & leastBit:
                A ^= n
            else:
                B ^= n
        return [ A, B ]
        
