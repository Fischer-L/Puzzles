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
var rob = function(root) {
    let money = dfs(root);
    return money[0];
};

function dfs(node) {
    if (!node) return [0, 0];
    let left = dfs(node.left);
    let right = dfs(node.right);
    let p1 = left[0] + right[0];
    let p2 = left[1] + right[1];
    let current = Math.max(p1, p2 + node.val);
    return [ current, p1 ];
}
