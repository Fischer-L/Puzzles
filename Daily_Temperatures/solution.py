class Solution(object):
    def dailyTemperatures(self, temperatures):
        """
        :type temperatures: List[int]
        :rtype: List[int]
        """
        L = len(temperatures)
        ans = [0] * L
        pendings = [ (temperatures[0], 0) ]
        
        for i in range(1, L):
            t = temperatures[i]
            # We arrange `pendings` from samll to large
            # so as long as seeing no temperature is larger
            # than the 1st element, then stop iterating.
            while pendings and t > pendings[0][0]:
                ans[pendings[0][1]] = i - pendings[0][1]
                pendings.pop(0)
            pendings.insert(0, (t, i))
        
        return ans
        
