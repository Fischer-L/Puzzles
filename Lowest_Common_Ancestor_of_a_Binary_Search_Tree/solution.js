/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) return root;
    
    let LCA = null;
    let qParent = root;
    let pParent = root;
    while (qParent === pParent) {
        LCA = qParent;
        if (q.val < qParent.val) {
            qParent = qParent.left;
        } else if (q.val > qParent.val) {
            qParent = qParent.right;
        } else {
            qParent = q;
        }
        if (p.val < pParent.val) {
            pParent = pParent.left;
        } else if (p.val > pParent.val) {
            pParent = pParent.right;
        } else {
            pParent = p;
        }
    }
    return LCA;
};
