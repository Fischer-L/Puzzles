# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def hasPathSum(self, root, sum):
        """
        :type root: TreeNode
        :type sum: int
        :rtype: bool
        """
        if root == None: return False
        sum2 = sum - root.val
        if root.left == None and root.right == None and sum2 == 0: return True
        return self.hasPathSum(root.left, sum2) or self.hasPathSum(root.right, sum2)
    
