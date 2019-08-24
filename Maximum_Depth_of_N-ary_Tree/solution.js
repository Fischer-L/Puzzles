/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  
  let ans = 0;

  function dfs(node, depth) {
    ans = Math.max(ans, ++depth);
    if (node.children) {
      for (let child of node.children) dfs(child, depth);
    }
  }
  
  dfs(root, 0);
  return ans;
};

