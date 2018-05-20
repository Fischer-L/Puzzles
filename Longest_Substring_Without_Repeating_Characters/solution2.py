class Solution:
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        L = len(s) if s != None else 0
        if L == 0: return 0
        
        end = 0
        start = 0
        longest = 0
        charMap = {}
        while end < L:
            c = s[end]
            if c in charMap and charMap[c] > start:
                start = charMap[c]
            longest = max(longest, end - start + 1)
            charMap[c] = end + 1
            end += 1
        return longest
