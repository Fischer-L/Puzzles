/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let order = [];
    let stack = root ? [root] : [];
    let node = root;
    while (stack.length > 0) {
        if (node) {
            while (node = node.left) {
                stack.push(node);
            }
        } else {
            node = stack.pop();
            order.push(node.val);
            node = node.right;
            if (node) {
                stack.push(node);
            }
        }
    }
    return order;
};
