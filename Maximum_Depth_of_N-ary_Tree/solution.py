"""
# Definition for a Node.
class Node:
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""
class Solution:
  def maxDepth(self, root: 'Node') -> int:
    if root == None: return 0
    self.ans = 0
    self._dfs(root, 0)
    return self.ans
  
  def _dfs(self, node, depth):
    depth += 1
    self.ans = max(self.ans, depth)
    if node.children != None:
      for child in node.children: self._dfs(child, depth)
