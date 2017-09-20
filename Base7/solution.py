class Solution(object):
    def convertToBase7(self, num):
        """
        :type num: int
        :rtype: str
        """
        if num == 0: return '0'
        ans = ''
        isMinus = False
        if num < 0:
            num *= -1
            isMinus = True
        while num > 0:
            ans = str(num % 7) + ans
            num //= 7
        return '-' + ans if isMinus else ans
            
