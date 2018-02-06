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
var isValidBST = function(root) {
    return isValid(root);
};

var isValid = function (node, max = Number.MAX_SAFE_INTEGER, min = Number.MIN_SAFE_INTEGER) {
    if (!node) return true;
    if (node.val >= max || node.val <= min) return false;
    return isValid(node.left, node.val, min) && isValid(node.right, max, node.val);
}
