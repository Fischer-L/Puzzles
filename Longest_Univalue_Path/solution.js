/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
  calculateLongest(root);
  return longest;
};

var calculateLongest = function(root) {
  if (!root) return 0;
  let leftLen = 0, rightLen = 0;
  if (root.left) {
    leftLen = calculateLongest(root.left);
    leftLen = root.left.val == root.val? leftLen + 1 : 0;
  }
  if (root.right) {
    rightLen = calculateLongest(root.right);
    rightLen = root.right.val == root.val? rightLen + 1 : 0;
  }
  longest = Math.max(longest, leftLen + rightLen);
  return Math.max(leftLen, rightLen);
};


var longest = 0;
