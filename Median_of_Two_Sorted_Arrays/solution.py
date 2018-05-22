class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        L1 = len(nums1) if nums1 != None else 0
        L2 = len(nums2) if nums2 != None else 0
        if L1 == 0 and L2 == 0: return 0
        
        L = L1 + L2
        half = math.floor(L/2);
        long = nums1
        short = nums2
        if L1 < L2: [long, short] = [short, long]
            
        right = self._searchNumByCount(0, len(long)-1, long, 0, len(short)-1, short, half)
        left = right
        if L % 2 == 0:
            left = self._searchNumByCount(0, len(long)-1, long, 0, len(short)-1, short, half-1)
        return (left + right) / 2
    
    def _searchNumByCount(self, s1, e1, long, s2, e2, short, count):
        if s1 > e1 or s2 > e2:
            i = 0
            nums = None
            if s1 > e1:
                nums = short
                i = count - s1
            else:
                nums = long
                i = count - s2
            return nums[i]
        
        m1 = math.floor((s1 + e1) / 2)
        interval = self._findInterval(s2, e2, short, long[m1])
        leftCount = m1 + interval[1]
        if count < leftCount:
            return self._searchNumByCount(s1, m1-1, long, s2, interval[0], short, count)
        elif count > leftCount:
            return self._searchNumByCount(m1+1, e1, long, interval[1], e2, short, count)
        else:
            return long[m1]
        
    def _findInterval(self, s, e, nums, target):
        while s <= e:
            m = math.floor((s + e) / 2)
            v = nums[m]
            if v < target:
                s = m + 1
            else:
                e = m - 1
        return [e, s]
