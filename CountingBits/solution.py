class Solution:
    def countBits(self, num):
        """
        :type num: int
        :rtype: List[int]
        """
        ans = []
        table = { 0: 0 }
        for i in range(num + 1):
            count = table[i >> 1] + (i & 1)
            table[i] = count
            ans.append(count)
        return ans
        
