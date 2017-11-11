class Root:
  def __init__(self, v):
    self.v = v
    # The left chain holds nodes(from big to small) smaller than root
    self.left = None
    # The right chain holds nodes(from small to bug) bigger than root
    self.right = None

class Node:
  def __init__(self, v):
    self.v = v
    self.child = None
    self.parent = None
    
class Solution:
  """
  Given a positive intergers array, A.
  Find the min dii between 2 integers in A.
  A will at least contain 2 integers.
  No dulplicated integers.
  """
  
  def findBySorting(self, v):
    sA = sorted(A)
    lenA = len(sA)
    min = -1
    i = 0
    j = 1
    while j < lenA:
      diff = abs(sA[i] - sA[j])
      if min < 0 or min > diff: min = diff
      i += 1
      j += 1
    return min
  
  def findByDividingTree(self, A):
    root = Root(A[0])
    lenA = len(A)
    min = -1
    for i in range(1, lenA):
      n = Node(A[i])
      if n.v < root.v:
        if not root.left:
          root.left = n
          n.parent = root
        else:
          l = root.left
          while l:
            if n.v > l.v:
              p = l.parent
              p.child = n
              n.parent = p
              n.child = l
              l.parent = n
              l = None
            else:
              if l.child:
                l = l.child
              else:
                l.child = n
                n.parent = l
                l = None
      else:
          if not root.right:
            root.right = n
            n.parent = root
          else:
            r = root.right
            while r:
              if n.v < r.v:
                p = r.parent
                p.child = n
                n.parent = p
                n.child = r
                r.parent = n
                r = None
              else:
                if r.child:
                  r = r.child
                else:
                  r.child = n
                  n.parent = r
                  r = None
      diff = abs(n.v - n.parent.v)
      if min < 0 or min > diff:
        min = diff
      if n.child:
        diff = abs(n.v - n.child.v)
        if min > diff: min = diff
      # Optimization: 1 is the possible smallest min so early break
      if min == 1: break
    return min
    
    
    
