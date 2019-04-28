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
  TreeNode xParent = null;
  TreeNode yParent = null;
  int xDepth = Integer.MAX_VALUE;
  int yDepth = Integer.MAX_VALUE;
  
  public boolean isCousins(TreeNode root, int x, int y) {
    this.preorder(null, root, x, y, 0);
    if (root != null && root.val == x && x == y) return true;
    return xDepth == yDepth && xParent != yParent;
  }
  
  private void preorder(TreeNode parent, TreeNode node, int x, int y, int depth) {
    if (node == null) return;
    
    if (xDepth != Integer.MAX_VALUE && yDepth != Integer.MAX_VALUE) return;
    
    depth++;
    if (depth > xDepth || depth > yDepth) return;
    
    if (node.val == x) {
      xDepth = depth;
      xParent = parent;
    }
    if (node.val == y) {
      yDepth = depth;
      yParent = parent;
    }
    preorder(node, node.left, x, y, depth);
    preorder(node, node.right, x, y, depth);
  }
}
