# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def constructMaximumBinaryTree(self, nums):
        """
        :type nums: List[int]
        :rtype: TreeNode
        """
        ix = self._1stMaxIndex(nums)
        root = TreeNode(nums[ix])
        
        leftNums = nums[:ix]
        if leftNums: root.left = self.constructMaximumBinaryTree(leftNums)
            
        rightNums = nums[ix + 1:]
        if rightNums: root.right = self.constructMaximumBinaryTree(rightNums)
            
        return root
        
        
    def _1stMaxIndex(self, nums):
        x = -10000000
        ix =  -1;
        l = len(nums)
        for i in range(l):
            if nums[i] > x:
                ix = i
                x = nums[i]
        return ix
        
