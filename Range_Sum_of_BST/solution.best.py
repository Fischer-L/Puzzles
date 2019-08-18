# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
  def rangeSumBST(self, root: TreeNode, L: int, R: int) -> int:
    if root == None: return 0
    
    ans = root.val if L <= root.val and root.val <= R else 0
    
    if root.val >= R:
      return ans + self.rangeSumBST(root.left, L, R)
    elif root.val <= L:
      return ans + self.rangeSumBST(root.right, L, R)
    else:
      return ans + self.rangeSumBST(root.left, L, R) + self.rangeSumBST(root.right, L, R)
    
