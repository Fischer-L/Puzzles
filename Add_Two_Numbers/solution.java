/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
  public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode head = new ListNode(-1);
    ListNode n = head;
    
    int carry = 0;
    while (l1 != null || l2 != null) {
      n.next = new ListNode(0);
      n = n.next;
	    n.val = carry;
      if (l1 != null) n.val += l1.val;
      if (l2 != null) n.val += l2.val;
      if (n.val >= 10) {
        n.val -= 10;
        carry = 1;
      } else {
        carry = 0;
      }
      if (l1 != null) l1 = l1.next;
      if (l2 != null) l2 = l2.next;
    }
    
    if (carry > 0) {
     n.next = new ListNode(carry);
    }
    
    return head.next;
  }
}
