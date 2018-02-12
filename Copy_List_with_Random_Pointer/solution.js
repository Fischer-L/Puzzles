/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    let nodes = [];
    let next = head;
    while (next) {
        nodes.push([next, next.random]);
        next = next.next;
    }
    let nodeCopies = nodes.map(([n, r]) => {
        return {
            label: n.label,
            next: null,
            random: null
        }
    });
    const L = nodes.length - 1;
    for (let i = 0; i <= L; ++i) {
        let copy = nodeCopies[i];
        copy.next = i+1 <= L-1 ? nodeCopies[i+1] : null;
        let random = nodes[i][1];
        let rIdx = nodes.findIndex(([n, r]) => n === random);
        if (rIdx >= 0) copy.random = nodeCopies[rIdx];
    }
    return nodeCopies[0];
};
