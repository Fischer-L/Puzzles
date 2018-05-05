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
    this.quickSort(head, null);
    return head;
  }

  public void quickSort(ListNode head, ListNode end) {
    if (head == end || head == null || head.next == null) return;
    
    ListNode curr = head.next;
    ListNode pivot = head;
    int pivotVal = head.val;
    
    while (curr != end) {
      if (curr.val < pivotVal) {
        int tmp = curr.val;
        pivot = pivot.next;
        curr.val = pivot.val;
        pivot.val = tmp;
      }
      curr = curr.next;
    }
    
    head.val = pivot.val;
    pivot.val = pivotVal;
    
    this.quickSort(head, pivot);
    this.quickSort(pivot.next, end);
  }

}
