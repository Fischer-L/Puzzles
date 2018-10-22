/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode sortList(ListNode head) {
      this.quickSortList(head, null);
      return head;
    }

    private void quickSortList(ListNode head, ListNode end) {
      if (head == end) return;

      ListNode next = head.next;
      ListNode pivot = head; // The node < the head in the value

      while (next != end) {
        if (next.val < head.val) {
          pivot = pivot.next;
          this.swapVal(pivot, next);
        }
        next = next.next;
      }
      this.swapVal(pivot, head);

      this.quickSortList(head, pivot);  
      // Since we put those nodes with the same vals as the pivot on the right side
      // there might be a chance we could skip those dulplicates.
      while (pivot.next != null && pivot.val == pivot.next.val) {
        pivot = pivot.next;
      }
      this.quickSortList(pivot.next, end);
    }

    private void swapVal(ListNode a, ListNode b) {
      int cache = a.val;
      a.val = b.val;
      b.val = cache;
    }
}
