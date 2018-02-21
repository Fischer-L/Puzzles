/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let dir = "left";
    let zigzag = [];
    let parents = root ? [root] : [];
    while (parents.length) {
        let vals = parents.map(node => node.val);
        if (dir == "left") {
            dir = "right";
        } else {
            vals.reverse();
            dir = "left";
        }
        zigzag.push(vals);
        
        parents = parents.reduce((children, node) => {
            if (node.left) children.push(node.left);
            if (node.right) children.push(node.right);
            return children;
        }, []);
    }
    return zigzag;
};
