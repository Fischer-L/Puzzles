class Solution {
    public int maxProfit(int[] prices) {
        final int L = prices != null ? prices.length : 0;
        if (L == 0) return 0;
        
        int p = 0;
        int cool = 0;
        int sell = 0;
        int prevSell = 0;
        int buy = -prices[0];
        for (int i = 1; i < L; ++i) {
            p = prices[i];
            cool = sell;
            sell = Math.max(cool, p + buy);
            buy = Math.max(buy, prevSell - p);
            prevSell = cool;
        }
        return sell;
    }
}
