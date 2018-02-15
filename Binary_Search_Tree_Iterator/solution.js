/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
    this._stack = [];
    this._pushLeftNodes(root);
};


BSTIterator.prototype._pushLeftNodes = function(root) {
    while (root) {
        this._stack.push(root);
        root = root.left;
    }
}


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    return this._stack.length > 0;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    let smallest = this._stack.pop();
    this._pushLeftNodes(smallest.right);
    return smallest.val;
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
