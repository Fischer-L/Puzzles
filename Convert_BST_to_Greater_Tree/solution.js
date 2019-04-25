/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  walkBST(root, 0);
  return root;
};

function walkBST(root, sumOfGreaters) {
  if (!root) return sumOfGreaters;
  
  if (root.right) sumOfGreaters = walkBST(root.right, sumOfGreaters);
  root.val += sumOfGreaters;
  
  if (root.left) return walkBST(root.left, root.val);
  return root.val;
}
