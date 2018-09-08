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
    
    private TreeNode rightTree = null;
    
    public void flatten(TreeNode root) {
        if (root == null) return;
        
        this.flatten(root.right);
        this.flatten(root.left);
        
        root.left = null;
        root.right = rightTree;
        rightTree = root;
    }
}
