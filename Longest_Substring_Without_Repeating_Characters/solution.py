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
        chars = set()
        while end < L:
            c = s[end]
            while c in chars:
                chars.remove(s[start])
                start += 1
            chars.add(c)
            longest = max(longest, end - start + 1)
            end += 1
        return longest
        
