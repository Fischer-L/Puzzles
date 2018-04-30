import java.util.*;
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        final int L = preorder.length;
        if (L == 0) return null;
        
        int rootVal = preorder[0];
        int rootPivot = 0;
        for (int i = 0; i < L; ++i) {
            if (inorder[i] == rootVal) {
                rootPivot = i;
                break;
            }
        }
        
        TreeNode root = new TreeNode(rootVal);
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
