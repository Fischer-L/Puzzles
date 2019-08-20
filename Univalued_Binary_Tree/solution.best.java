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
  public boolean isUnivalTree(TreeNode root) {
    return this._isUnivalTree(root, root);
  }
  
  private boolean _isUnivalTree(TreeNode node, TreeNode parent) {
    if (node == null) return true;
    if (node.val != parent.val) return false;
    if (!this._isUnivalTree(node.left, node)) return false;
    return this._isUnivalTree(node.right, node);
  }
  
}
