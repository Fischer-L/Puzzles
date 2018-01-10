# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def addTwoNumbers(self, l1, l2):
        carry = 0
        s = l1.val + l2.val
        if s >= 10:
            carry = 1
            s -= 10
        head = ListNode(s)
        
        n = head
        n1 = l1.next
        n2 = l2.next
        while n1 or n2:
            a = n1.val if n1 else 0
            b = n2.val if n2 else 0
            s = a + b
            if carry > 0: s += carry
            if s >= 10:
                carry = 1
                s -= 10
            else:
                carry = 0
            n.next = ListNode(s)
            n = n.next
            if n1: n1 = n1.next
            if n2: n2 = n2.next
        if carry > 0: n.next = ListNode(1)
            
        return head
        
