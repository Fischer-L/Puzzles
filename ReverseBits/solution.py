class Solution:
    # @param n, an integer
    # @return an integer
    def reverseBits(self, n):
        if n == 0: return 0
        ans = 0
        for i in range(32):
            ans <<= 1
            if n & 1: ans += 1
            n >>= 1
        return ans
