class Solution:
    def findUnsortedSubarray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        L = len(nums) if nums != None else 0
        if L == 0: return 0
        
        minUnsortIdx = -1
        minUnsortValue = sys.maxsize
        for i in range(1, L):
            n = nums[i]
            if n < minUnsortValue and n < nums[i-1]:
                minUnsortIdx = i
                minUnsortValue = n
        
        if minUnsortIdx < 0: return 0
            
        maxUnsortIdx = -1
        maxUnsortValue = -sys.maxsize
        for i in range(L-2, -1, -1):
            n = nums[i]
            if n > maxUnsortValue and n > nums[i+1]:
                maxUnsortIdx = i
                maxUnsortValue = n
        
        for i in range(minUnsortIdx):
            if nums[i] > minUnsortValue:
                minUnsortIdx = i
                break
        for i in range(L-1, maxUnsortIdx, -1):
            if nums[i] < maxUnsortValue:
                maxUnsortIdx = i
                break
        return maxUnsortIdx - minUnsortIdx + 1;
        
