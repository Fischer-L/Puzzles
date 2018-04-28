class Solution {
    public int maxCoinsByRecursion(int[] nums) {
        ArrayList<Integer> balloons = new ArrayList<Integer>();
        balloons.add(1);
        for (int n : nums) {
            if (n > 0) balloons.add(n);
        }
        balloons.add(1);
        int L = balloons.size();
        return this.calcMaxByRecursion(0, L-1, balloons, new int[L][L]);
    }
    
    private int calcMaByRecursionx(int s, int e, ArrayList<Integer> balloons, int[][] dp) {
        if (s + 1 >= e) return 0;
        
        if (dp[s][e] > 0) return dp[s][e];
        
        int max = -1;
        int sCoin = balloons.get(s);
        int eCoin = balloons.get(e);
        if (s + 2 == e) {
            max = sCoin * balloons.get(s+1) * eCoin;
        } else {
            int mid = 0;
            int left = 0;
            int right = 0;
            for (int i = s + 1; i < e; ++i) {
                left = calcMax(s, i, balloons, dp);
                right = calcMax(i, e, balloons, dp);
                mid = sCoin * balloons.get(i) * eCoin;
                max = Math.max(max, left + mid + right);
            }
        }
        dp[s][e] = max;
        return max;
    }
}
