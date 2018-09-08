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
    // If we put `rightTree` outside the function,
    // it would become a global varible. During each calls,
    // a a result, the previous result woudl pollute the next call in Leeetcode.
    let rightTree = null;
    
    function flattenFromRight(root) {
        if (!root) return;

        flattenFromRight(root.right);
        flattenFromRight(root.left);

        root.left = null;
        root.right = rightTree;
        rightTree = root;
    }
    flattenFromRight(root);
};

