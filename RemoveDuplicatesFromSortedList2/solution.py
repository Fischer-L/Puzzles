# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def deleteDuplicates(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if not head: return head
        root = ListNode(0)
        curr = root
        root.next = head
        nextNext = head.next
        dupCurrNext = False
        while nextNext:
            if curr.next.val == nextNext.val:
                dupCurrNext = True
            else:
                if not dupCurrNext: curr = curr.next
                curr.next = nextNext
                dupCurrNext = False
            nextNext = nextNext.next
        if dupCurrNext: curr.next = None
        return root.next
        
