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
  
  public ListNode detectCycle(ListNode head) {
    if (head == null) return null;
    
    ListNode slow = head;
    ListNode fast = head;
    do {
      slow = slow.next;
      fast = fast.next;
      if (fast != null) fast = fast.next;
    } while (slow != fast && fast != null);
    
    if (fast == null) return null;
      
    ListNode slow2 = head;
    while (slow2 != slow) {
      slow = slow.next;
      slow2 = slow2.next;
    }
    return slow;
  }
}
