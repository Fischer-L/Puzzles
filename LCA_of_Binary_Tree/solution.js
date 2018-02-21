# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def lowestCommonAncestor(self, root, p, q):
        """
        :type root: TreeNode
        :type p: TreeNode
        :type q: TreeNode
        :rtype: TreeNode
        """
        if not root or root is p or root is q: return root
        ancestor_1 = self.lowestCommonAncestor(root.left, p, q)
        ancestor_2 = self.lowestCommonAncestor(root.right, p, q)
        if ancestor_1 and ancestor_2: return root
        elif ancestor_1 and not ancestor_2: return ancestor_1
        elif not ancestor_1 and ancestor_2: return ancestor_2
        return None
    
