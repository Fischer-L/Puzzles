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
        
