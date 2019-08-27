# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
  def insertIntoBST(self, root: TreeNode, val: int) -> TreeNode:
    if root == None: return root
    
    if root.val > val:
      if root.left == None:
        root.left = TreeNode(val)
      else:
        self.insertIntoBST(root.left, val)
    else:
      if root.right == None:
        root.right = TreeNode(val)
      else:
        self.insertIntoBST(root.right, val)
    
    return root
      
      
