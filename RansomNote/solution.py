import collections
class Solution(object):
    def canConstruct(self, ransomNote, magazine):
        """
        :type ransomNote: str
        :type magazine: str
        :rtype: bool
        """
        remnantCounts = collections.Counter(ransomNote)
        for i in magazine:
            if remnantCounts[i] == 1:
                del remnantCounts[i]
                if len(remnantCounts) == 0: return True
            elif remnantCounts[i] > 1:
                remnantCounts[i] -= 1
        return len(remnantCounts) == 0
    
    def canConstructByPythonStringCountMethod(self, ransomNote, magazine):
        for i in set(ransomNote):
            if ransomNote.count(i) > magazine.count(i): return False
        return True
        
