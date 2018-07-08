class Solution:
    def removeInvalidParentheses(self, s):
        """
        :type s: str
        :rtype: List[str]
        """
        strs = self.removeExtraRightParentheses([s], 0)
        return self.removeExtraLeftParentheses(strs, len(strs[0])-1)
        
    def removeExtraRightParentheses(self, strs, pos):
        s = strs[0]
        L = len(s)
        if L == 0: return [""]
        
        count = 0
        while pos < L:
            c = s[pos]
            if c == "(": count += 1
            elif c == ")": count -= 1
                
            if count == -1: break
            pos += 1
        
        if count == -1:
            strSet = []
            for i in range(len(strs)):
                s = strs[i]
                for j in range(0, pos+1):
                    if s[j] == ")":
                        newStr = s[0:j] + s[j+1:]
                        if newStr not in strSet: strSet.append(newStr)
            return self.removeExtraRightParentheses(strSet, pos)
        return strs
        
    def removeExtraLeftParentheses(self, strs, pos):
        s = strs[0]
        L = len(s)
        if L == 0: return [""]
        
        count = 0
        while pos >= 0:
            c = s[pos]
            if c == ")": count += 1
            elif c == "(": count -= 1
                
            if count == -1: break
            pos -= 1
            
        if count == -1:
            strSet = []
            for i in range(len(strs)):
                s = strs[i]
                for j in range(L-1, pos-1, -1):
                    if s[j] == "(":
                        newStr = s[0:j] + s[j+1:]
                        if newStr not in strSet: strSet.append(newStr)
            return self.removeExtraLeftParentheses(strSet, pos-1)
        return strs
    
