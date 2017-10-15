class MinStack(object):

    def __init__(self):
        """
        initialize your data structure here.
        """
        self._stack = []
        self._minStack = []
        

    def push(self, x):
        """
        :type x: int
        :rtype: void
        """
        self._stack.append(x)
        if self._minStack:
            currentMin = self._minStack[len(self._minStack) - 1]
            if x <= currentMin: self._minStack.append(x)
        else:
            self._minStack.append(x)
        
        

    def pop(self):
        """
        :rtype: void
        """
        if not self._stack: return None
        x = self._stack.pop()
        if x == self.getMin(): self._minStack.pop()
        return x
        

    def top(self):
        """
        :rtype: int
        """
        if not self._stack: return None
        return self._stack[len(self._stack) - 1]
        

    def getMin(self):
        """
        :rtype: int
        """
        if not self._minStack: return None
        return self._minStack[len(self._minStack) - 1]
        

# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
