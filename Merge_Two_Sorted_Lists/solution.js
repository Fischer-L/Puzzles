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
var mergeTwoLists = function(l1, l2) {
    let l3 = { next: null };
    let n3 = l3;
    while (l1 || l2) {
        let nodes = [];
        let v1 = l1 ? l1.val : Number.MAX_SAFE_INTEGER;
        let v2 = l2 ? l2.val : Number.MAX_SAFE_INTEGER;
        if (v1 < v2) {
            nodes.push(l1);
            l1 = l1.next;
        } else if (v1 > v2) {
            nodes.push(l2);
            l2 = l2.next;
        } else {
            nodes.push(l1, l2);
            l1 = l1.next;
            l2 = l2.next;
        }
        nodes.forEach(v => {
            v.next = null;
            n3.next = v;
            n3 = n3.next;
        });
    }
    return l3.next;
};
