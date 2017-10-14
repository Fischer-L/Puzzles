# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def findBottomLeftValue(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if not root: return None
        
        parents = [ root ]
        children = None
        while parents:
            children = []
            for p in parents:
                if p.left: children.append(p.left)
                if p.right: children.append(p.right)
            if not children: 
                children = parents
                parents = None
            else:
                parents = children
        return children[0].val
    
