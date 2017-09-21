class Solution(object):
    def addStrings(self, num1, num2):
        """
        :type num1: str
        :type num2: str
        :rtype: str
        """
        ans = ''
        num1 = num1[::-1] # Revrese string so the index 0 == the least digit
        num2 = num2[::-1]
        num1Len = len(num1)
        num2Len = len(num2)
        added = extra = 0
        i = 0
        while i < num1Len or i < num2Len:
            added = extra
            if i < num1Len: added += int(num1[i])
            if i < num2Len: added += int(num2[i])
            extra = added // 10
            # Construct the answer with the index 0 == the max digit
            # ao that won't have to reverse string again
            ans = str(added % 10) + ans
            i += 1
        return ans if extra == 0 else str(extra) + ans
        
        
