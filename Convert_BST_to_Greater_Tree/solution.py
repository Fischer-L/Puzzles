# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
  def convertBST(self, root: TreeNode) -> TreeNode:
    self._walkBST(root, 0)
    return root

  def _walkBST(self, root, sumOfGreaters):
    if not root: return sumOfGreaters
    root.val += self._walkBST(root.right, sumOfGreaters)
    return self._walkBST(root.left, root.val)
        
