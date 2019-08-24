/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val,List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/
class Solution {
  private int ans = 0;
  
  public int maxDepth(Node root) {
    if (root != null) this.dfs(root, 0);
    return this.ans;
  }
  
  private void dfs(Node node, int depth) {
    this.ans = Math.max(this.ans, ++depth);
    if (node.children != null) {
      for (Node child : node.children) this.dfs(child, depth);
    }
  }
}
