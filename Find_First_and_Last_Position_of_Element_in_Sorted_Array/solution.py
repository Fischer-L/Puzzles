class Solution:
    def searchRange(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        first = -1
        last = -1
        
        v = 0
        s = 0
        m = 0
        e = len(nums) - 1 if nums != None else -1
        while s <= e:
            m = math.floor((s + e) / 2)
            v = nums[m]
            if target > v:
                s = m + 1
            elif target < v:
                e = m - 1
            else:
                first = m
                if m > 0 and nums[m-1] == target:
                    first = self._searchFirstPos(target, nums, s, m-1)
                last = m
                if m < len(nums) - 1 and nums[m+1] == target:
                    last = self._searchLastPos(target, nums, m+1, e)
                return [first, last]
        return [first, last]
        
    def _searchFirstPos(self, target, nums, s, e):
        v = 0
        m = 0
        while s <= e:
            m = math.floor((s + e) / 2)
            v = nums[m]
            if target > v:
                s = m + 1
            elif target < v:
                e = m - 1
            else:
                if m > 0 and nums[m-1] == target:
                    e = m - 1
                else:
                    return m
        return -1
        
    def _searchLastPos(self, target, nums, s, e):
        v = 0
        m = 0
        L = len(nums) - 1
        while s <= e:
            m = math.floor((s + e) / 2)
            v = nums[m]
            if target > v:
                s = m + 1
            elif target < v:
                e = m - 1
            else:
                if m < L and nums[m+1] == target:
                    s = m + 1
                else:
                    return m
        return -1
    
