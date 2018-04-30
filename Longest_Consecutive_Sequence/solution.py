class Solution:
    def longestConsecutive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        L = len(nums)
        if L <= 1: return L
        
        path = {}
        for i in range(L):
            n = nums[i]
            path[n] = Position(i, -1)
            
        heads = []
        for n in nums:
            if n+1 in path: path[n].below = path[n+1].here
            if n-1 not in path: heads.append(path[n].here)
        
        length = 1
        longest = 1
        for i in heads:
            n = nums[i]
            while path[n].below >= 0:
                length += 1
                n = nums[path[n].below]
            if length != 1:
                longest = max(longest, length)
                length = 1
        return longest

class Position:
    def __init__(self, here, below):
        self.here = here;
        self.below = below;
