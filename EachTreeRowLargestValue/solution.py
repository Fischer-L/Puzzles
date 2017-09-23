# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def largestValues(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        if root == None: return []
        maxV = root.val
        ans = []
        childrenNodes = []
        rootNodes = [ root ]
        while rootNodes:
            ans.append(maxV)
            maxV = None
            for r in rootNodes:
                if r.left:
                    childrenNodes.append(r.left)
                    if maxV < r.left.val: maxV = r.left.val
                if r.right:
                    childrenNodes.append(r.right)
                    if maxV < r.right.val: maxV = r.right.val
            rootNodes = childrenNodes
            childrenNodes = []
        return ans
    
    def largestValuesByListComprehension(self, root):
        maxes = []
        row = [root]
        while any(row):
            maxes.append(max(node.val for node in row))
            row = [kid for node in row for kid in (node.left, node.right) if kid]
        return maxes
