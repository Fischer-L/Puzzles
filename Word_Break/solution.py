class Solution:
    def wordBreak(self, s, wordDict):
        """
        :type s: str
        :type wordDict: List[str]
        :rtype: bool
        """
        sL = len(s)
        dictL = len(wordDict)
        breaks = [False] * sL
        
        for i in range(sL):
            if i == 0 or breaks[i-1]:
                for j in range(dictL):
                    w = wordDict[j]
                    wL = len(w)
                    if w == s[i:i+wL]:
                        breaks[i+wL-1] = True
                        if breaks[sL-1]: return True
        return False
