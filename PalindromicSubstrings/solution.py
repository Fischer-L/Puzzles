class Solution:
    def countSubstrings(self, s):
        """
        :type s: str
        :rtype: int
        """
        return self._countByLoopFromCenter(s)
    
    def _countByLoopFromCenter(self, s):
        N = len(s)
        i = j = -1
        count = 0
        
        for x in range(N):
            i = j = x
            while i >= 0 and j < N:
                if s[i] == s[j]:
                    count += 1
                    i -= 1
                    j += 1
                else:
                    break
                    
        for x in range(N):
            i = x
            j = x + 1
            while i >= 0 and j < N:
                if s[i] == s[j]:
                    count += 1
                    i -= 1
                    j += 1
                else:
                    break
                    
        return count
    
    def _countByDP(self, s):
        self._cache = {};
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
