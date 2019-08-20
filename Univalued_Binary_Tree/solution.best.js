/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  return _isUnivalTree(root, root && root.val);
};

function _isUnivalTree(node, rootVal) {
  if (!node) return true;
  return node.val === rootVal && 
         _isUnivalTree(node.left, rootVal) && 
         _isUnivalTree(node.right, rootVal);
}
