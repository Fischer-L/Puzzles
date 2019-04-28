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
var diameterOfBinaryTree = function(root) {
  const s = new Solution(root);
  return s.diameter;
};

class Solution {
  constructor(root) {
    this.diameter = 0;
    this._dfs(root);
  }
  
  _dfs(root) {
    if (!root) return -1;
    const maxFromLeft = this._dfs(root.left) + 1;
    const maxFromRight = this._dfs(root.right) + 1;
    this.diameter = Math.max(this.diameter, maxFromLeft + maxFromRight);
    return Math.max(maxFromLeft, maxFromRight);
  }
}
