# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def __init__(self):
        self._candidates = []
        
    def isSubtree(self, s, t):
        """
        :type s: TreeNode
        :type t: TreeNode
        :rtype: bool
        """
        self.collectSubTreesByDepth(s, self.getTreeDepth(t))
        for root in self._candidates:
            if self.isIdentical(root, t): return True
        return False
        
    def getTreeDepth(self, root):
        d = 1
        leftD = self.getTreeDepth(root.left) if root.left else 0
        rightD = self.getTreeDepth(root.right) if root.right else 0
        return d + max(leftD, rightD)
    
    def collectSubTreesByDepth(self, root, depth):
        d = 1
        leftD = self.collectSubTreesByDepth(root.left, depth) if root.left else 0
        rightD = self.collectSubTreesByDepth(root.right, depth) if root.right else 0
        d = d + max(leftD, rightD)
        if d == depth: self._candidates.append(root)
        return d
    
    def isIdentical(self, a, b):
        aParents = [ a ]
        bParents = [ b ]
        aNodeCount = 1
        bNodeCount = 1
        while aNodeCount and bNodeCount:
            aChildren = []
            bChildren = []
            aNodeCount = 0
            bNodeCount = 0
            l = len(aParents)
            for i in range(l):
                ap = aParents[i]
                bp = bParents[i]
                if ap and bp:
                    if ap.val != bp.val: return False
                    aChildren.append(ap.left)
                    aChildren.append(ap.right)
                    bChildren.append(bp.left)
                    bChildren.append(bp.right)
                    if ap.left: aNodeCount += 1
                    if ap.right: aNodeCount += 1
                    if bp.left: bNodeCount += 1
                    if bp.right: bNodeCount += 1
                elif (ap and not bp) or (not ap and bp) :
                    return False
            aParents = aChildren
            bParents = bChildren
        return True
    
