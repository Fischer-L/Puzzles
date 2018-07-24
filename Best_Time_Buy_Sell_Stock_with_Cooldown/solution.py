class Solution:
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        L = len(prices)
        if L == 0: return 0
        
        p = 0
        cool = 0
        sell = 0
        prevSell = 0
        buy = -prices[0]
        
        for i in range(L):
            p = prices[i]
            cool = sell
            sell = max(cool, buy + p)
            buy = max(buy, prevSell - p)
            prevSell = cool
        
        return sell
