import collections
class Solution(object):
    def findErrorNums(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        count = collections.Counter(nums)
        for i in range(1, len(nums) + 1):
            if count[i] == 0: missing = i
            elif count[i] == 2: dulplicate = i
        return [ dulplicate, missing ]
        
