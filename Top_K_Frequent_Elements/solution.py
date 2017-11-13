from collections import Counter

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
        let heap = self._buildMaxHeap(nums)
        return heap[:k]
        
    def _buildMaxHeap(self, nums):
        n = len(nums)
        ldx = int(n / 2) # the index of the last internal node        
        for i in range(ldx, 0, -1):
            self._maxHeapify(nums, i, n)
            
    def _maxHeapify(self, nums, i, n):
        biggest = i - 1
        l = 2 * i - 1
        r = 2 * i
        if nums[biggest] < nums[l]: biggest = l
        if r < n and nums[biggest] < nums[r]: biggest = r
        if biggest != i:
            nums[biggest] = nums[biggest] ^ nums[i]
            nums[i] = nums[biggest] ^ nums[i]
            nums[biggest] = nums[biggest] ^ nums[i]
            self._maxHeapify(nums, biggest, n)
