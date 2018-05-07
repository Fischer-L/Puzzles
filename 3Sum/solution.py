class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        
        i = 0
        MAX = len(nums) - 1
        ans = []
        nums.sort()
        
        while i < MAX:
            v = nums[i]
            begin = i + 1
            end = MAX
            
            while begin < end:
                s = v + nums[begin] + nums[end]
                
                if s == 0:
                    tri = [v, nums[begin], nums[end]]
                    ans.append(tri)
                    # Processing duplicates of Number 2
                    # Rolling the front pointer to the next different number forwards
                    while begin < end and nums[begin] == tri[1]: begin += 1
                    # Processing duplicates of Number 3
                    # Rolling the back pointer to the next different number backwards
                    while begin < end and nums[end] == tri[2]: end -= 1
                elif s < 0:
                    begin += 1
                else:
                    end -= 1
                
            # Processing duplicates of Number 1
            while i <= MAX and nums[i] == v: i += 1
        
        return ans
        
