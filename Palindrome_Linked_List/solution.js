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
var isPalindrome = function(head) {
    let rev = null;
    let slow = head;
    let fast = head;
    
    // Reverse the 1st half
    while (fast && fast.next) {
        fast = fast.next.next;
        head = slow.next;
        slow.next = rev;
        rev = slow;
        slow = head;
    }
    if (fast) slow = slow.next;
    
    // Check the palindrome and restore the list btw
    let tmp = null;
    let ans = true;
    while (slow && rev) {
        ans = ans && slow.val == rev.val;
        slow = slow.next;
        tmp = rev;
        rev = rev.next;
        tmp.next = head;
        head = tmp;
    }
    return ans;
};
