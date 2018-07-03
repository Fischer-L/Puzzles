class Solution {
    public int maximalSquare(char[][] matrix) {
        final int MAX_ROW = matrix != null ? matrix.length : 0;
        final int MAX_COL = MAX_ROW > 0 ? matrix[0].length : 0;
        if (MAX_ROW == 0 || MAX_COL == 0) return 0;
        
        int left = 0;
        int maxLen = 0;
        int[] dp = new int[MAX_COL];
        int[] nextDP = new int[MAX_COL];
        for (int row = 0; row < MAX_ROW; row++) {
            for (int col = 0; col < MAX_COL; col++) {
                int upper = dp[col];
                int upperLeft = col > 0 ? dp[col - 1] : 0;
                int current = 0;
                if (matrix[row][col] == '1') {
                    current = Math.min(Math.min(left, upper), upperLeft) + 1;
                }
                left = nextDP[col] = current;
                maxLen = Math.max(maxLen, current);
            }
            int[] tmp = dp;
            dp = nextDP;
            nextDP = tmp;
        } 
        return maxLen * maxLen;
    }
}
