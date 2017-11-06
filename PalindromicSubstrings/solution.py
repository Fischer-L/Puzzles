# WIP....
class Solution:
    def __init__(self):
        self._cache = {};
    
    def countSubstrings(self, s):
        """
        :type s: str
        :rtype: int
        """
        count = 0
        sLen = len(s)
        for b in range(sLen):
            for e in range(b, sLen):
                if self._isPalindromic(s, b ,e): count += 1
        return count
        
    def _isPalindromic(self, s, b, e):
        """
        : type s: str
        : type b: int begin index
        : type e: int end index
        """
        key = str(b) + "-" + str(e)
        if key in self._cache:
            return self._cache[key]
        
        if s[b] != s[e]: 
            self._cache[key] = False
            return False
        else:
            b += 1
            e -= 1
            if b >= e:
                self._cache[key] = True
                return True
            ans = self._cache[key] = self._isPalindromic(s, b, e)
            return ans
