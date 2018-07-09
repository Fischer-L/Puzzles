class Solution:
    def maxSlidingWindow(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        window = []
        queue = []
        
        for i in range(len(nums)):
            n = nums[i]
            while queue and queue[0] <= i - k: queue.pop(0)
            while queue and n > nums[queue[len(queue)-1]]: queue.pop()
            queue.append(i)
            if i+1 >= k: window.append(nums[queue[0]])
        return window
