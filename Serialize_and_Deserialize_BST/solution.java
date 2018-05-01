/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Codec {

    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        if (root == null) return "";
        StringBuilder sb = this.preorderTree(0, root, new StringBuilder("pre:"));
        sb.append("ino:");
        this.inorderTree(0, root, sb);
        return sb.toString();
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        if (data == null || data.equals("")) return null;
        
        int inoStart = data.indexOf("ino:");
        String preString = data.substring(4, inoStart-1);
        String inoString = data.substring(inoStart+4, data.length());
        if (preString.equals("") || inoString.equals("")) return null;
        
        String[] preTokens = preString.split(",");
        String[] inoTokens = inoString.split(",");
        if (preTokens.length != inoTokens.length) return null;
        return this.buildTree(preTokens, inoTokens);
    }
    
    public StringBuilder preorderTree(int depth, TreeNode root, StringBuilder sb) {
        if (root == null) return sb;
        sb.append(root.val);
        sb.append("*");
        sb.append(depth);
        sb.append(",");
        this.preorderTree(depth+1, root.left, sb);
        this.preorderTree(depth+1, root.right, sb);
        return sb;
    }
    
    public StringBuilder inorderTree(int depth, TreeNode root, StringBuilder sb) {
        if (root == null) return sb;
        this.inorderTree(depth+1, root.left, sb);
        sb.append(root.val);
        sb.append("*");
        sb.append(depth);
        sb.append(",");
        this.inorderTree(depth+1, root.right, sb);
        return sb;
    }
    
    public TreeNode buildTree(String[] preorder, String[] inorder) {
        final int L = preorder.length;
        if (L == 0) return null;
        
        int rootPivot = 0;
        String rootVal = preorder[0];
        for (int i = 0; i < L; ++i) {
            if (inorder[i].equals(rootVal)) {
                rootPivot = i;
                break;
            }
        }
        int end = rootVal.indexOf("*");
        TreeNode root = new TreeNode(Integer.parseInt(rootVal.substring(0, end)));
        root.left = this.buildTree(
            Arrays.copyOfRange(preorder, 1, rootPivot + 1),
            Arrays.copyOfRange(inorder, 0, rootPivot)
        );
        root.right = this.buildTree(
            Arrays.copyOfRange(preorder, rootPivot + 1, L),
            Arrays.copyOfRange(inorder, rootPivot + 1, L)
        );
        return root;
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));
