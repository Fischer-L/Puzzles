/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  if (!root) return 0;
  
  const sum = L <= root.val && root.val <= R ? root.val : 0;
  
  if (root.val >= R) {
    return sum + rangeSumBST(root.left, L, R);
  } else if (root.val <= L) {
    return sum + rangeSumBST(root.right, L, R);
  } else {
    return sum + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
  }
};
