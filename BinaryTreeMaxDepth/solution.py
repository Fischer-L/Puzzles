# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def maxDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if not root: return 0
        maxDepth = 0
        children = []
        parents = [ root ]
        while parents:
            maxDepth += 1
            children = []
            for p in parents:
                if p.left: children.append(p.left)
                if p.right: children.append(p.right)
            parents = children
        return maxDepth
        
