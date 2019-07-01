/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
  
  private Set<ListNode> nodeSet = new HashSet<>();
  
  public ListNode detectCycle(ListNode head) {
    if (head == null) return head;
    if (this.nodeSet.contains(head)) return head;
    this.nodeSet.add(head);
    return this.detectCycle(head.next);
  }
}
