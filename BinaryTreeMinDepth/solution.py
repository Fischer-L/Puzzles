# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def minDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if not root: return 0
        depth = 0
        children = []
        parents = [ root ]
        while parents:
            depth += 1
            children = []
            for p in parents:
                if not p.left and not p.right:
                    children = []
                    break
                if p.left: children.append(p.left)
                if p.right: children.append(p.right)
            parents = children
        return depth
