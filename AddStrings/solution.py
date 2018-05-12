class Solution:
    def addStrings(self, a, b):
        """
        :type num1: str
        :type num2: str
        :rtype: str
        """
        i = len(a) - 1
        j = len(b) - 1
        ans = ""
        carry = 0
        while i >= 0 or j >= 0:
            if i >= 0: 
                carry += ord(a[i]) - ord('0')
                i -= 1
            if j >= 0:
                carry += ord(b[j]) - ord('0')
                j -= 1
            ans = str(carry % 10) + ans
            carry = 1 if carry >= 10 else 0
        if carry > 0: ans = "1" + ans
        return ans
