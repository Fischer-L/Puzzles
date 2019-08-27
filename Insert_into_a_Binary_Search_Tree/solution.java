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
  public TreeNode insertIntoBST(TreeNode root, int val) {
    if (root == null) return root;
    
    if (root.val > val) {
      if (root.left == null) {
        root.left = new TreeNode(val);
      } else {
        this.insertIntoBST(root.left, val);
      }
    } else {
      if (root.right == null) {
        root.right = new TreeNode(val);
      } else {
        this.insertIntoBST(root.right, val);
      }
    }
    return root;
  }
}
