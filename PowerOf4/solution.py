class Solution(object):
    def isPowerOfFour(self, num):
        """
        :type num: int
        :rtype: bool
        """
        return num != 0 and num & (num-1) == 0 and num & 1431655765 == num
        
    def isPowerOfFour2(self, num):
      return num & (num-1) == 0 and (num -1) % 3 == 0
