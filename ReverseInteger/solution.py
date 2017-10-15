class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        MAX_INT = 2147483647
        MIN_INT = -2147483648
        ans = 0
        negative = x < 0
        if negative: x = -1 * x
        while x:
            mod = x % 10
            ans = ans * 10 + mod
            x = (x - mod) / 10
            if ans > MAX_INT or ans < MIN_INT: return 0
        return -1 * ans if negative else ans
        
