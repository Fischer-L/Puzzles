# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Codec: 
    # Format into a array-like representation: "1,2,3,n,n,6,n"
    # However this approach is a bit long...
    def serialize(self, root):
        """Encodes a tree to a single string.
        
        :type root: TreeNode
        :rtype: str
        """
        if root == None: return ""
        
        treeStr = ""
        parents = [root]
        children = None
        bottom = False
        while not bottom:
            bottom = True
            children = []
            for node in parents:
                val = str(node.val) if node else "n"
                treeStr += ("," + val)
                left = None
                if node and node.left:
                    bottom = False
                    left = node.left
                right = None
                if node and node.right:
                    bottom = False
                    right = node.right
                children.append(left)
                children.append(right)
            parents = children
        
        return treeStr[1:]
        
    # Build the tree from the array-like representation: "1,2,3,n,n,6,n"
    def deserialize(self, data):
        """Decodes your encoded data to tree.
        
        :type data: str
        :rtype: TreeNode
        """
        if data == "": return None
        
        vals = data.split(",")
        L = len(vals)
        nodes = [None] * L
        nodes[0] = TreeNode(int(vals[0]))
        for i in range(L):
            left = 2 * i + 1
            right = 2 * i + 2
            if right >= L: break
                
            node = nodes[i]
            if node:
                node.left = TreeNode(int(vals[left])) if vals[left] != "n" else None
                node.right = TreeNode(int(vals[right])) if vals[right] != "n" else None
                nodes[left] = node.left
                nodes[right] = node.right
        return nodes[0]

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.deserialize(codec.serialize(root))
