# Definition for a binary tree node.
class TreeNode():
     def __init__(self, x):
          self.val = x
          self.left = None
          self.right = None

class Solution():
     def __init__(self):
          self.resultTree = None
          
     def mergeTrees(self, t1, t2):
          """
          :type t1: TreeNode
          :type t2: TreeNode
          :rtype: TreeNode
          """
          if not t1:
               self.resultTree = t2
          elif not t2:
               self.resultTree = t1
          else:
               self.resultTree = TreeNode(t1.val + t2.val)
               self._merge(t1, t2, self.resultTree)
          return self.resultTree
     
     def _merge(self, t1, t2, root):
          left1 = t1.left if t1 else None
          left2 = t2.left if t2 else None
          leftVal = None
          if left1:
               leftVal = left1.val
          if left2:
               leftVal = leftVal + left2.val if leftVal != None else left2.val
          if leftVal != None:
               root.left = TreeNode(leftVal)
               self._merge(left1, left2, root.left)
               
          right1 = t1.right if t1 else None
          right2 = t2.right if t2 else None
          rightVal = None
          if right1:
               rightVal = right1.val
          if right2:
               rightVal = rightVal + right2.val if rightVal != None else right2.val
          if rightVal != None:
               root.right = TreeNode(rightVal)
               self._merge(right1, right2, root.right)
               
class TestData:
     def init():
          TestData.createTree1()
          TestData.createTree2()
          TestData.createResultTree()
          
     def createTree1():
          t = TreeNode(1)
          left = t.left = TreeNode(3)
          right = t.right = TreeNode(2)
          left.left = TreeNode(5)
          TestData.t1 = t

     def createTree2():
          t = TreeNode(2)
          left = t.left = TreeNode(1)
          right = t.right = TreeNode(3)
          left.right = TreeNode(4)
          right.right = TreeNode(7)
          TestData.t2 = t
          
     def createResultTree():
          t = TreeNode(3)
          left = t.left = TreeNode(4)
          right = t.right = TreeNode(5)
          left.left = TreeNode(5)
          left.right = TreeNode(4)
          right.right = TreeNode(7)
          TestData.result = t
          
     def compareTrees(t1, t2):
          if t1 == None and t2 == None:
               return True
          
          same = False
          if t1.val == t2.val:
               same = TestData.compareTrees(t1.left, t2.left)
          if same:
               same = TestData.compareTrees(t1.right, t2.right)
          return same
               
     
TestData.init()        
same = TestData.compareTrees(TestData.t1, TestData.t2)
print('TestData.t1 != TestData.t2: ' + ('True' if not same else 'False'))
same = TestData.compareTrees(TestData.result, TestData.result)
print('TestData.result == TestData.result: ' + ('True' if same else 'False'))

s = Solution()
same = TestData.compareTrees(TestData.result, s.mergeTrees(TestData.t1, TestData.t2))
print('TestData.result == Solution result: ' + ('True' if same else 'False'))

          
