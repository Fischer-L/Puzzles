from functools import cmp_to_key

class Solution:
    def findMinArrowShots(self, points):
        """
        :type points: List[List[int]]
        :rtype: int
        """
        if not points: return 0
        
        def cmpPoints(a, b):
            diff = a[1] - b[1]
            return diff if diff != 0 else a[0] - b[0]
        
        points = sorted(points, key=cmp_to_key(cmpPoints))
        
        count = 1
        top = points[0]
        length = len(points)
        for i in range(1, length):
            below = points[i]
            if below[0] > top[1]:
                count += 1
                top = points[i]
        return count
        
