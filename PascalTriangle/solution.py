class Solution(object):
    def generate(self, numRows):
        """
        :type numRows: int
        :rtype: List[List[int]]
        """
        if numRows <= 0: return []
        
        ans = [[1]]
        for i in range(1, numRows):
            ans.append(list(map(lambda x, y: x + y, ans[-1] + [0], [0] + ans[-1])))
        return ans
                
