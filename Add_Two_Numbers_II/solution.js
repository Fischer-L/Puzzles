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
    let n1 = countListLength(l1);
    let n2 = countListLength(l2);
    let headGrip = { next: null };
    return headGrip.next;
};

var countListLength = function (ls) {
    let c = 0;
    while (ls) {
        ++c;
        ls = ls.next;
    }
    return c;
}

var addLists = function (prev, l1, n1, l2, n2) {
    if (n1 <= 0 && n2 <= 0) return 0;
    
    let node = { next: null };
    if (n1 <= 0 && n2 > 0) {
        node.val = l2.val + addLists(node, null, 0, l2.next, n2-1);
    } else if (n1 > 0 && n2 <= 0) {
        node.val = l1.val + addLists(node, l1.next, n1-1, null, 0);
    } else if (n1 == n2) {
        node.val = l1.val + l2.val + addLists(node, l1.next, n1-1, l2.next, n2-1);
    } else if (n1 > n2) {
        node.val = l1.val + addLists(node, l1.next, n1-1, l2, n2);
    } else if (n1 < n2) {
        node.val = l2.val + addLists(node, l1, n1, l2.next, n2-1);
    }
    let carry = 0;
    if (node.val >= 10) {
        carry = 1;
        node.val = node.val - 10;
    }
    prev.next = node;
    return carry;
}

