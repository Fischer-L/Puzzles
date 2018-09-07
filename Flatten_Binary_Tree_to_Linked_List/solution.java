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
    public void flatten(TreeNode root) {
        this.preorderFlattern(root);
    }
  
    private TreeNode preorderFlattern(TreeNode root) {
      if (root == null) return root;
      
      TreeNode leaf = root;
      TreeNode left = root.left;
      TreeNode right = root.right;
      
      root.left = null;
      root.right = left;
      
      if (left != null) {
        leaf = this.preorderFlattern(left);
        if (leaf == null) leaf = left;
      }
      
      leaf.right = right;
      
      if (right != null) {
        leaf = this.preorderFlattern(right);
        if (leaf == null) leaf = right;
      }
      
      return leaf;
    }
}
