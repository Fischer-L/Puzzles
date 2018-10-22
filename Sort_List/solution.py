# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
  def sortList(self, head):
      """
      :type head: ListNode
      :rtype: ListNode
      """
      self._quickSortList(head, None)
      return head

  def _quickSortList(self, head, end):
    if head == end: return

    pivot = head
    current = head.next

    while current != None and current != end:
      if current.val < head.val:
        pivot = pivot.next
        self.swapVal(pivot, current)
      current = current.next
    self.swapVal(head, pivot)

    self._quickSortList(head, pivot)
    while pivot.next != None and pivot.val == pivot.next.val:
      pivot = pivot.next
    self._quickSortList(pivot.next, end)

  def swapVal(self, a, b):
    cache = a.val
    a.val = b.val
    b.val = cache
