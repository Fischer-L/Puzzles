/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const L = lists.length;
    if (!L) return null;
    return divideMerging(lists, 0, L - 1);
};

var divideMerging = function (lists, start, end) {
    if (start == end) {
        return lists[start];
    } else if (start + 1 == end) {
        return mergeTwoLists(lists[start], lists[end]);
    }
    let mid = Math.floor((start + end) / 2);
    let l1 = divideMerging(lists, start, mid);
    let l2 = divideMerging(lists, mid + 1, end);
    return mergeTwoLists(l1, l2);
}

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
