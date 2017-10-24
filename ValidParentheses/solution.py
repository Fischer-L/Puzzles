class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        parentheses = {
            '(': ')', '{': '}', '[': ']'
        }
        charsStack = []
        valid = True
        if valid:
            for c in s:
                if c in parentheses:
                    charsStack.append(c)
                else:
                    size = len(charsStack)
                    if size == 0:
                        valid = False
                        break
                    elif c != parentheses[charsStack[size - 1]]:
                        valid = False
                        break
                    else:
                        charsStack.pop()
                        
        if len(charsStack) > 0: valid = False
        return valid
