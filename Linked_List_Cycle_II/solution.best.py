# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def detectCycle(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        
        if not head: return head
        
        slow = head.next
        fast = head.next
        if fast != None: fast = fast.next
        while slow != fast and fast != None:
          slow = slow.next
          fast = fast.next
          if fast != None: fast = fast.next
        
        if not fast: return fast
        
        slow2 = head
        while slow != slow2:
          slow = slow.next
          slow2 = slow2.next
        return slow
        
        
        
        
