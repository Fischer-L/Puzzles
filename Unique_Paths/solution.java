import java.util.*;

class Solution {
    public int uniquePaths(int m, int n) {
        if (m <= 0 || n <= 0) return 0;
        
        int[] ans = new int[m];
        Arrays.fill(ans, 1);
        
        for (n--; n > 0; n--) {
            for (int i = 1; i < m; i++) {
                ans[i] += ans[i-1];
            }
        }
        
        return ans[m-1];
    }
}
