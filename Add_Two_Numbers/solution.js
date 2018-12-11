/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let head = {};
  let n = head;
  let carry = 0;
  while (l1 || l2) {
    n.next = {};
    n = n.next;
    n.val = carry;
    if (l1) n.val += l1.val;
    if (l2) n.val += l2.val;
    if (n.val < 10) {
      carry = 0;
    } else {
      n.val -= 10;
      carry = 1;
    }
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  
  if (carry > 0) {
    n.next = {
      val: carry,
      next: null
    };
  }
  
  return head.next;
};
