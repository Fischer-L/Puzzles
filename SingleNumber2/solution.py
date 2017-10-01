class Solution(object):
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        ones = 0
        twos = 0
        for i in nums:
          ones = (ones ^ i) & ~twos
          twos = (twos ^ i) & ~ones
        return ones
        
    def singleNumberByCountingBits(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        ans = 0
        for bit in range(32):
            sum = 0
            for i in nums:
                if (i >> bit) & 1: sum += 1
            if sum % 3:
                ans |= sum << bit
        return ans
