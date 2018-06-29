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
    public int rob(TreeNode root) {
      int[] money = this.dfs(root);
      return money[0];
    }

    private int[] dfs(TreeNode node) {
      if (node == null) return new int[] {0, 0};
      int[] leftMoney = this.dfs(node.left);
      int[] rightMoney = this.dfs(node.right);
      int p1 = leftMoney[0] + rightMoney[0];
      int p2 = leftMoney[1] + rightMoney[1];
      int current = Math.max(p1, p2 + node.val);
      return new int[] { current, p1 };
    }
}
