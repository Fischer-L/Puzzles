class Solution:
    def countArrangement(self, N):
        """
        :type N: int
        :rtype: int
        """
        self.count = 0
        nums = [ i for i in range(N+1) ]
        self._countByBackTracing(nums, N)
        return self.count
    
    def _countByBackTracing(self, nums, start):
        if start == 0:
            self.count += 1
            return
        
        for i in range(start, 0, -1):
            self._swap(nums, start, i)
            ns = nums[start]
            if start % ns == 0 or ns % start == 0:
                self._countByBackTracing(nums, start - 1)
            self._swap(nums, i, start)
            
    def _swap(self, nums, a, b):
        tmp = nums[b]
        nums[b] = nums[a]
        nums[a] = tmp
    
