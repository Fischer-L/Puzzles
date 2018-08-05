class Solution:
    def uniquePaths(self, m, n):
        """
        :type m: int
        :type n: int
        :rtype: int
        """
        if m <= 0 or n <= 0: return 0
        
        ans = [1] * m
        n -= 1
        while n > 0:
            for i in range(1, m): ans [i] += ans[i-1]
            n -= 1
        return ans[m-1]
        
