# The guess API is already defined for you.
# @param num, your guess
# @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
# def guess(num):

class Solution(object):
    def guessNumber(self, n):
        """
        :type n: int
        :rtype: int
        """
        
        ans = 0
        up = n
        btm = 1
        while ans == 0:
            a = int((up + btm) / 2)
            g = guess(a)
            if g == -1:
                up = a - 1
            elif g == 1:
                btm = a + 1
            else:
                ans = a
        
        return ans
                
            
        
