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
  public TreeNode convertBST(TreeNode root) {
    if (root == null) return null;
    TreeNode newRoot = new TreeNode(0);
    this.walkBST(root, newRoot, 0);
    return newRoot;
  }
  
  private int walkBST(TreeNode root, TreeNode newRoot, int sumOfGreaters) {
    if (root.right != null) {
      newRoot.right = new TreeNode(0);
      sumOfGreaters = this.walkBST(root.right, newRoot.right, sumOfGreaters);
    }
    newRoot.val = root.val + sumOfGreaters;
    
    if (root.left != null) {
      newRoot.left = new TreeNode(0);
      return this.walkBST(root.left, newRoot.left, newRoot.val);
    }
    return newRoot.val;
  }
}
