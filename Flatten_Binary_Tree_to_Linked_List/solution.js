/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    preorderFlattern(root)
};

function preorderFlattern(root) {
  if (!root) return root;
  
  let leaf = root;
  let left = root.left;
  let right = root.right;
  
  root.left = null;
  root.right = left;
  
  if (left) {
    leaf = preorderFlattern(left);
    if (!leaf) leaf = left;
  }
  
  leaf.right = right;
  
  if (right) {
    leaf = preorderFlattern(right);
    if (!leaf)  leaf = right;
  }
  
  return leaf;
}
