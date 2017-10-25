import collections
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def __init__(self):
        self.counter = collections.Counter()
        
    def findFrequentTreeSum(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        if not root: return []
        self.walkTreeToGetSums(root)
        commons = self.counter.most_common()
        mostFreq = commons[0][1]
        mosts = [ c for c in commons if c[1] == mostFreq ]
        return [ v[0] for v in mosts ]
        
        
    def walkTreeToGetSums(self, root): 
        s = root.val
        if root.left: s = s + self.walkTreeToGetSums(root.left)
        if root.right: s = s + self.walkTreeToGetSums(root.right)
        self.counter[s] = self.counter[s] + 1
        return s
