# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
  def __init__(self):
    self.diameter = 0
    
  def diameterOfBinaryTree(self, root: TreeNode) -> int:
    self.dfs(root)
    return self.diameter
  
  def dfs(self, root: TreeNode) -> int:
    if root == None: return -1
    maxLenFromLeft = self.dfs(root.left) + 1
    maxLenFromRight = self.dfs(root.right) + 1
    self.diameter = max(self.diameter, maxLenFromLeft + maxLenFromRight)
    return max (maxLenFromLeft, maxLenFromRight)
