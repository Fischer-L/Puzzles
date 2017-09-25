# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def __init__(self):
        self.ans = 0
        
    def pathSum(self, root, sum):
        """
        :type root: TreeNode
        :type sum: int
        :rtype: int
        """
        self._calculateCumulations(root, None, sum)
        return self.ans
    
    def _calculateCumulations(self, node, parent, sum):
        if not node: return
        
        # Just mutate the TreeNode-type object to save the creation of another type object
        # cumulations[i] == the cumulation of values upward until i-th parent
        # cumulations[0] == the cumulation of the self value
        # cumulations[1] == the cumulation of the self value + the 1st upper parent's value
        node.cumulations = [ node.val ]
        
        # Calculate cumulations
        if parent:
            node.cumulations += [ node.val + cumu for cumu in parent.cumulations ]
                
        # See how many cumulations matching the target sum
        for cumu in node.cumulations:
            if cumu == sum: self.ans += 1
        
        self._calculateCumulations(node.left, node, sum)
        self._calculateCumulations(node.right, node, sum)
            
