# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
  def __init__(self):
    self._parentX = None
    self._parentY = None
    self._depthX = sys.maxsize
    self._depthY = sys.maxsize
  
  def isCousins(self, root: TreeNode, x: int, y: int) -> bool:
    self._preorder(None, root, x, y, 0)
    return self._parentX != self._parentY and self._depthX == self._depthY
  
  def _preorder(self, parent, root, x, y, depth):
    if root == None: return
    if depth > self._depthX or depth > self._depthY: return
    if self._parentX != None and self._parentY != None: return
    
    if root.val == x:
      self._depthX = depth
      self._parentX = parent
    elif root.val == y:
      self._depthY = depth
      self._parentY = parent
    else:
      self._preorder(root, root.left, x, y, depth + 1)
      self._preorder(root, root.right, x, y, depth + 1)
    
    
