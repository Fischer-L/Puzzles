from collections import Counter

class Solution:
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        return self._goHeap(nums, k)
    
    def _goCounter(self, nums, k):
        coms = Counter(nums).most_common(k)
        return [ i[0] for i in coms ]
    
    def _goHeap(self, nums, k):
        c = Counter(nums)
        heap = []
        for i, v in enumerate(c): heap.append([v, c[v]])
        self._buildMaxHeap(heap)
        return [ i[0] for i in heap[:k]]
        
    def _buildMaxHeap(self, heap):
        n = len(heap)
        ldx = int(n / 2) # the index of the last internal node        
        for i in range(ldx, 0, -1):
            self._maxHeapify(heap, i, n)
            
    def _maxHeapify(self, heap, i, n):
        print(i)
        biggest = i - 1
        l = 2 * i - 1
        r = 2 * i
        if l < n and heap[biggest][1] < heap[l][1]: biggest = l
        if r < n and heap[biggest][1] < heap[r][1]: biggest = r
        if biggest != i - 1:
          tmp = heap[i]
          heap[i] = heap[biggest]
          heap[biggest] = tmp
          self._maxHeapify(heap, biggest, n)
