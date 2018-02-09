/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if (!root || !root.left) return;
    let left = root.left;
    let right = root.right;
    left.next = right;
    if (root.next) root.right.next = root.next.left;
    connect(left);
    connect(right);
};
