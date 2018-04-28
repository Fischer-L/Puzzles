
class Solution:
    def maxCoinsByRecursion(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        balloons = [1]
        for n in nums:
            if n > 0: balloons.append(n)
        balloons.append(1)
        dp = {}
        return self.calcMaxByRecursion(0, len(balloons)-1, balloons, dp)
    
    def calcMaxByRecursion(self, s, e, balloons, dp):
        if s + 1 >= e: return 0
        
        if s not in dp: dp[s] = {}
        if e in dp[s]: return dp[s][e]
        
        maxCoin = -1
        sCoin = balloons[s]
        eCoin = balloons[e]
        if s + 2 == e:
            maxCoin = sCoin * balloons[s+1] * eCoin
        else:
            i = s + 1
            while i < e:
                left = self.calcMaxByRecursion(s, i, balloons, dp)
                right = self.calcMaxByRecursion(i, e, balloons, dp)
                mid = sCoin * balloons[i] * eCoin
                maxCoin = max(maxCoin, left + mid + right)
                i += 1
            
        dp[s][e] = maxCoin
        
        return maxCoin
        
    def maxCoinsByLoop(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        balloons = [1]
        for n in nums:
            if n > 0: balloons.append(n)
        balloons.append(1)
        
        L = len(balloons)
        dp = [ [0] * L for i in range(L) ]
        
        for k in range(2, L):
            s = 0
            e = s + k
            while e < L:
                for i in range(s+1, e):
                    left = dp[s][i]
                    right = dp[i][e]
                    mid = balloons[s] * balloons[i] * balloons[e]
                    dp[s][e] = max(dp[s][e], left + mid + right)
                s += 1
                e += 1
        return dp[0][L-1]
