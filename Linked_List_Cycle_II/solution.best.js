/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (!head) return head;
  
  let slow = head;
  let fast = head;
  do {
    slow = slow.next;
    fast = fast.next && fast.next.next;
  } while (slow !== fast && fast);
  
  if (!fast) return fast;
  
  let slow2 = head;
  while (slow != slow2) {
    slow = slow.next;
    slow2 = slow2.next;
  }
  return slow;
};
