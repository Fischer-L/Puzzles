# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def oddEvenList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if not head or not head.next: return head
        oddHead = head
        oddNode = None
        evenNode = oddHead.next
        
        while evenNode and evenNode.next:
            # Connect 2 even nodes
            oddNode = evenNode.next
            evenNode.next = oddNode.next
            # Move odd node to the front
            oddNode.next = oddHead.next
            oddHead.next = oddNode
            oddHead = oddNode
            # Go to the next even node
            evenNode = evenNode.next
        
        return head
        
