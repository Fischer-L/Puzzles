/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    function dfs(root) {
        if (!root) return 0;
        
        let leftMax = dfs(root.left);
        let rightMax = dfs(root.right);
        
        let maxHere = root.val;
        let maxThruLeft = maxHere + leftMax;
        let maxThruRight = maxHere + rightMax;
        let maxThruBoth = maxThruLeft + rightMax;
        
        maxHere = Math.max(maxHere, maxThruLeft, maxThruRight);
        maxSum = Math.max(maxSum, maxHere, maxThruBoth);
        return maxHere;
    }
    dfs(root);
    return maxSum;
};
