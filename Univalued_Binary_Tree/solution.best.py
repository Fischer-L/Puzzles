# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
class Solution:
  def isUnivalTree(self, root: TreeNode) -> bool:
    return self._isUnivalTree(root, root)
  
  def _isUnivalTree(self, node: TreeNode, parent: TreeNode) -> bool:
    if node == None: return True
    if node.val != parent.val: return False
    if self._isUnivalTree(node.left, node) == False: return False
    return self._isUnivalTree(node.right, node)
