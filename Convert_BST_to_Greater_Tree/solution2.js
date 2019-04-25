/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  if (!root) return null;
  const newRoot = new TreeNode(0);
  walkBST(root, newRoot, 0);
  return newRoot;
};

function walkBST(root, newRoot, sumOfGreaters) {
  if (root.right) {
    newRoot.right = new TreeNode(0);
    sumOfGreaters = walkBST(root.right, newRoot.right, sumOfGreaters);
  }
  newRoot.val = root.val + sumOfGreaters;
  
  if (root.left) {
    newRoot.left = new TreeNode(0);
    return walkBST(root.left, newRoot.left, newRoot.val);
  }
  return newRoot.val;
}
