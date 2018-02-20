# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def sortedArrayToBST(self, nums):
        """
        :type nums: List[int]
        :rtype: TreeNode
        """
        L = len(nums)
        if L == 0: return None
        if L == 1: return TreeNode(nums[0])
        m = math.floor(L / 2)
        node = TreeNode(nums[m])
        node.left = self.sortedArrayToBST(nums[0:m])
        if m + 1 < L: node.right = self.sortedArrayToBST(nums[m+1:])
        return node;
