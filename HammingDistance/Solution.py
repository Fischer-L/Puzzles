class Solution(object):
    def hammingDistance(self, x, y):
        """
        :type x: int
        :type y: int
        :rtype: int
        """
        c = 0
        xor = x ^ y
        while xor:
        	c += xor & 1
        	xor = xor >> 1
        return c

testdata = []
testdata.append((1, 4))
testdata.append((1, 1))
testdata.append((1, 12))
testdata.append((6532, 765309))
s = Solution()
for d in testdata:
	exp = bin(d[0] ^ d[1]).count('1')
	act = s.hammingDistance(d[0], d[1])
	print('%d ~ %d: expected: %d == actual: %d: %s' % (d[0], d[1], exp, act, exp == act))
