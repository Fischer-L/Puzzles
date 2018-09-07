# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def flatten(self, root):
        """
        :type root: TreeNode
        :rtype: void Do not return anything, modify root in-place instead.
        """
        self._preorderFlattern(root)
        
    def _preorderFlattern(self, root):
      if not root: return root
      
      leaf = root
      left = root.left
      right = root.right
      
      root.left = None
      root.right = left
      
      if left:
        leaf = self._preorderFlattern(left)
        if not leaf: leaf = left
          
      leaf.right = right
      
      if right:
        leaf = self._preorderFlattern(right)
        if not leaf: leaf = right
        
      return leaf
