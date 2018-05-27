class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        L1 = len(nums1) if nums1 != None else 0
        L2 = len(nums2) if nums2 != None else 0
        half = (L1 + L2) // 2
        odd = (L1 + L2) % 2 == 1
        if L1 == 0 and L2 == 0:
            return 0
        elif L1 == 0:
            if odd: return nums2[half]
            return (nums2[half] + nums2[half-1]) / 2
        elif L2 == 0:
            if odd: return nums1[half]
            return (nums1[half] + nums1[half-1]) / 2
        
        s = -1
        e = half
        med = leftMax = rightMax = left0 = left1 = right0 = right1 = 0
        longer = nums1
        shorter = nums2
        LL = L1
        LS = L2
        if L1 < L2: longer, shorter, LL, LS = shorter, longer, LS, LL
        
        while s <= e:
            left0 = (s + e) // 2
            left1 = max(half - left0 - 2, -1)
            if left1 >= LS:
                s = left0 + 1
                continue
                
            right0 = left0 + 1
            right1 = left1 + 1
            if odd:
                if right0 >= LL:
                    med = shorter[right1]
                    right1 += 1
                elif right1 >= LS:
                    med = longer[right0]
                    right0 += 1
                else:
                    if longer[right0] < shorter[right1]:
                        med = longer[right0]
                        right0 += 1
                    else:
                        med = shorter[right1]
                        right1 += 1
            else:
                if left0 < 0:
                    leftMax = shorter[left1]
                elif left1 < 0:
                    leftMax = longer[left0]
                else:
                    leftMax = max(longer[left0], shorter[left1])
                
                if right0 >= LL:
                    rightMin = shorter[right1]
                elif right1 >= LS:
                    rightMin = longer[right0]
                else:
                    rightMin = min(longer[right0], shorter[right1])
                
                med = (leftMax + rightMin) / 2
            
            if left0 >= 0 and longer[left0] > med:
                e = left0 - 1
            elif left1 >= 0 and shorter[left1] > med:
                s = left0 + 1
            elif right0 < LL and longer[right0] < med:
                s = left0 + 1
            elif right1 < LS and shorter[right1] < med:
                e = left0 - 1
            else:
                s = e + 1
        
        return med
