# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
class Solution:
    def inorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        ans = []
        stack = []
        node = root
        
        if node: stack.append(node)
            
        while len(stack) > 0:
            if node:
                while node.left:
                    node = node.left
                    stack.insert(0, node)
                node = None
            else:
                node = stack.pop(0)
                ans.append(node.val)
                node = node.right
                if node: stack.insert(0, node)
        
        return ans
