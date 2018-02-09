/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = head;
    let slow = head;
    while (fast && slow && fast.next && slow.next) {
        fast = fast.next;
        if (fast === slow) return true;
        fast = fast.next;
        if (fast === slow) return true;
        slow = slow.next;
    }
    return false;
};
