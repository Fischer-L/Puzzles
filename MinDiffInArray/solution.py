class Root:
  def __init__(self, v):
    self.v = v
    # The left chain holds nodes(from big to small) smaller than root
    self.left = None
    # The right chain holds nodes(from small to bug) bigger than root
    self.right = None

