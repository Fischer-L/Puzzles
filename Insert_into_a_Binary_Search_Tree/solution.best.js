/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  let node = root;
  while (node) {
    if (node.val > val) {
      if (node.left) {
        node = node.left;
      } else {
        node.left = new TreeNode(val);
        node = null;
      }
    } else {
      if (node.right) {
        node = node.right;
      } else {
        node.right = new TreeNode(val);
        node = null;
      }
    }
  }
  return root;
};
