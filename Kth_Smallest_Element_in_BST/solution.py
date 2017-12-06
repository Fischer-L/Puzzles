# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def kthSmallest(self, root, k):
        """
        :type root: TreeNode
        :type k: int
        :rtype: int
        """
        self._k = k;
        return self._traverseToKth(root).val
    
    def _traverseToKth(self, node):
        kth = None
        
        if node.left:
            kth = self._traverseToKth(node.left)
        
        self._k -= 1
        if self._k == 0: kth = node
        if kth: return kth
        
        if node.right:
            kth = self._traverseToKth(node.right)
            
        return kth
        
