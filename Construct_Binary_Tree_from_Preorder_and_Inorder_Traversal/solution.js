/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let ri = preorder.length > 0 ? inorder.indexOf(preorder[0]) : -1;
    if (ri < 0) return null;
    
    let root = {
        val: preorder[0]
    };
    
    let leftPreorder = preorder.slice(1, ri + 1);
    let leftInorder = inorder.slice(0, ri);
    root.left = buildTree(leftPreorder, leftInorder);
    
    let rightPreorder = preorder.slice(ri + 1);
    let rightInorder = inorder.slice(ri + 1);
    root.right = buildTree(rightPreorder, rightInorder);
    
    return root;
};
