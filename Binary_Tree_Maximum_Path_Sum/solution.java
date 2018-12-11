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
  private int maxSum = Integer.MIN_VALUE;
  
  public int maxPathSum(TreeNode root) {
    this.dfs(root);
    return this.maxSum;
  }
  
  private int dfs(TreeNode root) {
    if (root == null) return 0;
    
    int leftMax = this.dfs(root.left);
    int rightMax = this.dfs(root.right);
    
    int max = root.val;
    int maxThruLeft = max + leftMax;
    int maxThruRight = max + rightMax;
    int maxThruBoth = maxThruLeft + rightMax;
    
    max = this.max(max, maxThruLeft, maxThruRight);
    this.maxSum = this.max(this.maxSum, max, maxThruBoth);
    
    return max;
  }
  
  private int max(Integer... nums) {
    int max = nums[0];
    for (int i = nums.length - 1; i >= 1; i--) {
      max = Math.max(max, nums[i]);
    }
    return max;
  }
}
