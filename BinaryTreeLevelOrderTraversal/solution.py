# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def levelOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        if not root: return []
        ans = []
        vals = []
        children = []
        parents = [ root ]
        while parents:
            vals = []
            children = []
            for p in parents:
                vals.append(p.val)
                if p.left: children.append(p.left)
                if p.right: children.append(p.right)
            ans.append(vals)
            parents = children
        return ans
        
