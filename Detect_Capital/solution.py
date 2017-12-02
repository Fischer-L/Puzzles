class Solution:
    def detectCapitalUse(self, word):
        """
        :type word: str
        :rtype: bool
        """
        count = 0
        length = len(word)
        for i in range(1, length):
            if word[i].isupper(): count += 1
        if count > 0:
            if word[0].isupper(): count += 1
            return count == length
        else:
            if word[0].isupper(): count += 1
            return count == 0 or count == 1
            
