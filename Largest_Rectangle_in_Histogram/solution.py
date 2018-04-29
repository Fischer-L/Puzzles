class Solution:
    def largestRectangleArea(self, heights):
        """
        :type heights: List[int]
        :rtype: int
        """
        stack = []
        maxArea = 0
        for right in range(len(heights)):
            if len(stack) > 0:
                rightH = heights[right]
                mid = stack[len(stack)-1]
                while mid >= 0 and heights[mid] > rightH:
                    stack.pop()
                    l = len(stack)
                    left = stack[l-1] if l > 0 else -1
                    area = heights[mid] * (right - left - 1)
                    maxArea = max(maxArea, area)
                    mid = left
            stack.append(right)
        
        right = len(heights) - 1
        while len(stack) > 0:
            mid = stack.pop()
            l = len(stack)
            left = stack[l-1] if l > 0 else -1
            area = heights[mid] * (right - left)
            maxArea = max(maxArea, area)
        return maxArea
        
