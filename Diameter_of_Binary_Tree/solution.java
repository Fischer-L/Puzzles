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
  private int diameter = 0;
  
  public int diameterOfBinaryTree(TreeNode root) {
    this.dfs(root);
    return this.diameter;
  }
  
  public int dfs(TreeNode root) {
    if (root == null) return -1;
    int maxLengthFromLeft = this.dfs(root.left) + 1;
    int maxLengthFromRight = this.dfs(root.right) + 1;
    this.diameter = Math.max(this.diameter, maxLengthFromLeft + maxLengthFromRight);
    return Math.max(maxLengthFromLeft, maxLengthFromRight);
  }
}
