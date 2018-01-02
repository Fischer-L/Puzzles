class Solution(object):
    def increasingTriplet(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        
        a_i = sys.maxsize
        a_j = sys.maxsize
        
        for i in range(len(nums)):
            if nums[i] <= a_i:
                a_i = nums[i]
            elif nums[i] <= a_j:
                a_j = nums[i]
            else:
                return True
        return False
    
