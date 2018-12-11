import sys

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
class Solution:
    def __init__(self):
      self._maxSum = -sys.maxsize
  
    def maxPathSum(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        self._dfs(root)
        return self._maxSum

    def _dfs(self, root):
      if not root: return 0

      leftMax = self._dfs(root.left)
      rightMax = self._dfs(root.right)

      maxHere = root.val
      maxThruLeft = maxHere + leftMax
      maxThruRight = maxHere + rightMax
      maxThruBoth = maxThruLeft + rightMax

      maxHere = max([maxHere, maxThruLeft, maxThruRight])
      self._maxSum = max([self._maxSum, maxHere, maxThruBoth])

      return maxHere
        
