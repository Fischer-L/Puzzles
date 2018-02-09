/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let lenA = getLength(headA);
    let lenB = getLength(headB);
    if (lenA && lenB) {
        let long = null;
        let short = null;
        let diff = lenA - lenB;
        if (diff > 0) {
            long = headA;
            short = headB;
        } else {
            long = headB;
            short = headA;
        }
        diff = Math.abs(diff);
        while (diff) {
            long = long.next;
            --diff;
        }
        while (long && short) {
            if (long === short) return long;
            long = long.next;
            short = short.next;
        }
    }
    return null;
};

var getLength = function (node) {
    let i = 0;
    while (node) {
        ++i;
        node = node.next;
    }
    return i;
}
