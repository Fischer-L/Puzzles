from collections import Counter

class Node:
    def __init_(self, v, c):
        """
        v = the value in the array
        c = the count of the presence; this is used for the max heap
        """
        self.v = v
        self.c = c
        self.left = None
        self.right = None
        self.parent = None

class Solution:
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        return self._goCounter(nums, k)
    
    def _goCounter(self, nums, k):
        coms = Counter(nums).most_common(k)
        return [ i[0] for i in coms ]
    
    def _goHeap(self, nums, k):
        let mh = self._buildMaxHeap(nums)
        
    def _buildMaxHeap(self, nums):
        n = len(nums)
        ldx = int(n / 2) # the index of the last internal node        
        for i in range(ldx, -1, -1):
            self._maxHeapify(nums, i, n)
            
    def _maxHeapify(self, nums, i, n):
        
