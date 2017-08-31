# Definition for a binary tree node.
class TreeNode():
     def __init__(self, x):
         self.val = x
         self.left = None
         self.right = None

class Solution():
    def mergeTrees(self, t1, t2):
        """
        :type t1: TreeNode
        :type t2: TreeNode
        :rtype: TreeNode
        """
