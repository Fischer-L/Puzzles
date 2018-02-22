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
var isSymmetric = function(root) {
    let parents = root ? [root] : [];
    let children = null;
    
    while (parents.length) {
        children = parents.reduce((children, p) => {
            if (p) {
                children.push(p.left, p.right);
            } else {
                children.push(null);
            }
            return children;
        }, []);
        for (let i = 0, j = children.length - 1; i < j; ++i, --j) {
            let ci = children[i];
            let cj = children[j];
            if (ci != cj) {
                if ((ci && !cj) ||
                    (!ci && cj) ||
                    (ci.val != cj.val)
                 ) {
                    return false;
                }
            }
        }
        parents = children.filter(node => !!node);
    }
    return true;
};
