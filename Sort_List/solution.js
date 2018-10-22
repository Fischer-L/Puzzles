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
var sortList = function(head) {
  quickSortList(head, null);
  return head;
};

function quickSortList(head, end) {
  if (head === end) return;
  
  let pivot = head;
  let here = head.next;
  
  while (here !== end && here !== null) {
    if (here.val < head.val) {
      pivot = pivot.next;
      swapVal(pivot, here);
    }
    here = here.next;
  }
  swapVal(head, pivot);
  
  quickSortList(head, pivot);
  while (pivot.next !== null && pivot.val === pivot.next.val) {
    pivot = pivot.next;
  }
  quickSortList(pivot.next, end);
}

function swapVal(a, b) {
  let cache = a.val;
  a.val = b.val;
  b.val = cache;
}
