# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def removeElements(self, head, val):
        """
        :type head: ListNode
        :type val: int
        :rtype: ListNode
        """
        current = head
        while current:
            if current.next and current.next.val == val:
                current.next = current.next.next
            else:
                current = current.next
        return head.next if head and head.val == val else head
