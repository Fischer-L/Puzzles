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
    this.bfs(null, root, x, y, 0);
    if (xDepth == yDepth && xDepth != Integer.MAX_VALUE) {
      if (xParent != yParent) return true;
      if (xParent == yParent && xParent == null) return true;
    }
    return false;
  }
  
  private void bfs(TreeNode parent, TreeNode node, int x, int y, int depth) {
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
    bfs(node, node.left, x, y, depth);
    bfs(node, node.right, x, y, depth);
  }
}
