/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        TreeNode node = root;
        ArrayList<Integer> ans = new ArrayList<Integer>();
        ArrayDeque<TreeNode> q = new ArrayDeque<TreeNode>();
        
        while (node != null) {
            q.addFirst(node);
            while (node.left != null) {
                node = node.left;
                q.addFirst(node);
            }
            
            do {
                node = q.pollFirst();
                ans.add(node.val);
            } while (q.size() > 0 && node.right == null);
            
            node = node.right;
        }
        
        return ans;
    }
}
