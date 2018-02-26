/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let preorder = [];
    preorderTree(root, preorder);
    let inorder = [];
    inorderTree(root, inorder);
    preorder = JSON.stringify(preorder);
    inorder = JSON.stringify(inorder);
    return preorder + ":" + inorder;
};

var preorderTree = function(root, arr) {
    if (!root) return;
    arr.push(root.val);
    preorderTree(root.left, arr);
    preorderTree(root.right, arr);
}

var inorderTree = function(root, arr) {
    if (!root) return;
    inorderTree(root.left, arr);
    arr.push(root.val);
    inorderTree(root.right, arr);
}

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

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let [ preorder, inorder ] = data.split(":");
    return buildTree(JSON.parse(preorder), JSON.parse(inorder));
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
