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
  public int rangeSumBST(TreeNode root, int L, int R) {
    if (root == null) return 0;
    
    int sum = (L <= root.val && root.val <= R) ? root.val : 0;
    
    if (root.val >= R) {
      return sum + this.rangeSumBST(root.left, L, R);
    } else if (root.val <= L) {
      return sum + this.rangeSumBST(root.right, L, R);
    } else {
      return sum + this.rangeSumBST(root.left, L, R) + this.rangeSumBST(root.right, L, R);
    }
  }
}
