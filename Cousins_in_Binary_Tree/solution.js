/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  const nodeX = {
    val: x,
    parent: null,
    depth: Number.MAX_SAFE_INTEGER,
  };
  const nodeY = {
    val: y,
    parent: null,
    depth: Number.MAX_SAFE_INTEGER,
  };
  preorder(null, root, nodeX, nodeY, 0);
  return nodeX.parent !== nodeY.parent && nodeX.depth === nodeY.depth;
};

function preorder(parent, root, nodeX, nodeY, depth) {
  if (!root) return;
  if (depth > nodeX.depth || depth > nodeY.depth) return;
  if (nodeX.parent !== null && nodeY.parent !== null) return;
  
  if (root.val === nodeX.val) {
    nodeX.depth = depth;
    nodeX.parent = parent;
  } else if (root.val === nodeY.val) {
    nodeY.depth = depth;
    nodeY.parent = parent;
  } else {
    preorder(root, root.left, nodeX, nodeY, depth + 1);
    preorder(root, root.right, nodeX, nodeY, depth + 1);
  }
}
