class Solution:
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        # Boyer–Moore majority vote algorithm
        count = 0
        majority = None
        
        for i in range(len(nums)):
            n = nums[i]
            if count == 0:
                majority = n
                count = 1
            elif majority != n:
                count -= 1
            elif majority == n:
                count += 1
        
        return majority
