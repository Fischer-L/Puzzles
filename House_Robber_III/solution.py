# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def rob(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        money = self._dfs(root)
        return money[0]
        
    def _dfs(self, node):
        if node == None: return [0, 0]
        leftMoney = self._dfs(node.left)
        rightMoney = self._dfs(node.right)
        p1 = leftMoney[0] + rightMoney[0]
        p2 = leftMoney[1] + rightMoney[1]
        current = max(p1, p2 + node.val)
        return [ current, p1 ]
