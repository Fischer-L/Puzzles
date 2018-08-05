from collections import Counter

class Solution:
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        L = len(nums)
        freqMap = Counter(nums)
        freqBucket = [None] * (L+1)
        for i, key in enumerate(freqMap):
            freq = freqMap[key]
            if freqBucket[freq] == None: freqBucket[freq] = []
            freqBucket[freq].append(key)
        
        i = L
        ans = []
        while k > 0:
            if freqBucket[i] != None: 
                ans += freqBucket[i]
                k -= len(freqBucket[i])
            i -= 1
        return ans
