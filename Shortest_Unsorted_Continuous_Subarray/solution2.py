class Solution:
    def findUnsortedSubarray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        L = len(nums) if nums != None else 0
        if L == 0: return 0
        
        e = 0
        s = L
        i = 0
        j = L -1
        maxOnLeft = nums[i]
        minOnRight = nums[j]
        while i < L:
            # maxOnLeft = max(nums[i], maxOnLeft)
            # minOnRight = min (nums[j], minOnRight)
            # This is faster than max/min per the leetcode results
            if nums[i] > maxOnLeft: maxOnLeft = nums[i]
            if nums[j] < minOnRight: minOnRight = nums[j]
            
            if nums[i] < maxOnLeft: e = i
            if nums[j] > minOnRight: s = j
            i += 1
            j -= 1
        return e - s + 1 if e > s else 0
