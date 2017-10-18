# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if not head: return head
        
        prevHead = None
        nextHead = head.next
        head.next = None
        while nextHead:
            prevHead = head
            head = nextHead
            nextHead = head.next
            head.next = prevHead
        return head
        
