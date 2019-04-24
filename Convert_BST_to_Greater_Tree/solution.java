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
    this.walkBST(root, 0);
    return root;
  }
  
  private int walkBST(TreeNode root, int sumOfGreaters) {
    if (root == null) {
      return sumOfGreaters;
    }
    root.val += this.walkBST(root.right, sumOfGreaters);
    return this.walkBST(root.left, root.val);
  }
}
