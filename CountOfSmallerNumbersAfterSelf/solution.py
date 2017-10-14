class Node(object):
    def __init__(self, v):
        self.v = v
        self.dupCount = 1
        self.leftChildCount = 0
        self.left = None
        self.right = None

class Solution(object):
    def countSmaller(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        ans = []
        root = None
        for n in nums[::-1]:
            if not root:
                ans = [0]
                root = Node(n)
            else:
                current = root
                smallerCount = 0
                while current:
                    if n > current.v:
                        smallerCount += current.dupCount + current.leftChildCount
                        if current.right:
                            current = current.right
                        else:
                            current.right = Node(n)
                            current = None
                    elif n == current.v:
                        current.dupCount += 1
                        smallerCount += current.leftChildCount
                        current = None
                    elif n < current.v:
                        current.leftChildCount += 1
                        if current.left:
                            current = current.left
                        else:
                            current.left = Node(n)
                            current = None
                ans.append(smallerCount)
        ans.reverse()
        return ans
