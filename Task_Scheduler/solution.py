class Solution:
    def leastInterval(self, tasks, n):
        """
        :type tasks: List[str]
        :type n: int
        :rtype: int
        """
        charsFrequency = collections.Counter(tasks)
        maxFrequency =  max(charsFrequency.values())
        
        maxFrequentCharsCount = 0
        for c in charsFrequency:
            if maxFrequency == charsFrequency[c]:
                maxFrequentCharsCount += 1
     
        return max(len(tasks), (maxFrequency-1) * (n+1) + maxFrequentCharsCount)  
