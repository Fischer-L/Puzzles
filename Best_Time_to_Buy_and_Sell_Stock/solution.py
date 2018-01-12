class Solution:
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        if not prices: return 0
        
        profit = 0
        buy = prices[0]
        for i in range(1, len(prices)):
            p = prices[i]
            if p > buy and p - buy > profit:
                profit = p - buy
            elif p < buy:
                buy = p
                
        return profit
        
