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
    let dummyHead = {};
    let prev = dummyHead;
    while (root) {
        if (root.left) {
            prev.next = root.left;
            prev = root.left;
        }
        if (root.right) {
            prev.next = root.right;
            prev = root.right;
        }
        if (root.next) {
            root = root.next;
        } else {
            root = dummyHead.next;
            prev = dummyHead;
            prev.next = null;
        }
    }
};
