class Solution:
    def singleNonDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if not nums: return 0
        
        l = len(nums)
        s = 0
        e = l - 1
        while s < e:
            m = int((s + e) / 2)
            if nums[m] == nums[m-1]:
                if (m - 1 - s) % 2 == 0:
                    s = m + 1
                else:
                    e = m - 2
            elif nums[m] == nums[m+1]:
                if (e - m + 1) % 2 == 0:
                    e = m - 1
                else:
                    s = m + 2
            else:
                s = e = m
        return nums[s]
