class Solution:
    def judgeCircle(self, moves):
        """
        :type moves: str
        :rtype: bool
        """
        originPos = [0, 0]
        currentPos = [0, 0]
        for m in moves:
          getattr(self, m)(currentPos)
        return True if currentPos[0] == originPos[0] and currentPos[1] == originPos[1] else False


    def U(self, pos):
      pos[0] += 1

    def D(self, pos):
      pos[0] -= 1

    def R(self, pos):
      pos[1] += 1

    def L(self, pos):
      pos[1] -= 1

testMoves = []
testMoves.append(('UD', True))
testMoves.append(('LL', False))
testMoves.append(('URDL', True))
testMoves.append(('URDDL', False))
testMoves.append(('DURDLDRRLL', False))

s = Solution()
for data in testMoves:
  print('Circle: %s == Solution: %s of moves: %s' % (data[1], s.judgeCircle(data[0]), data[0]))
