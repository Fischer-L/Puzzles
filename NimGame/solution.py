class Solution(object):
    def canWinNim(self, n):
        """
        :type n: int
        :rtype: bool
        """
        return n & 0b11 != 0
        # Faste solution: return n % 4 != 0
        
