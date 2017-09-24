import re

class MagicDictionary:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.countMap = {}
        

    def buildDict(self, dict):
        """
        Build a dictionary through a list of words
        :type dict: List[str]
        :rtype: void
        """
        for i in dict:
            l = len(i)
            if l in self.countMap:
                self.countMap[l].append(i)
            else:
                self.countMap[l] = [i]
        

    def search(self, word):
        """
        Returns if there is any word in the trie that equals to the given word after modifying exactly one character
        :type word: str
        :rtype: bool
        """
        l = len(word)
        if l in self.countMap:
            for i in self.countMap[l]:
                if self._magicSearchByReg(word, i, l): return True
        return False
        
    def _magicSearchByReg(self, word, target, length):
        if word != target:
            for i in range(length):
                test = re.compile(word[:i] + '.' + word[i+1:])
                if test.match(target): return True
        return False

# Your MagicDictionary object will be instantiated and called as such:
# obj = MagicDictionary()
# obj.buildDict(dict)
# param_2 = obj.search(word)
