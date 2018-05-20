import java.util.*;

class Solution {
    public int lengthOfLongestSubstring(String str) {
        final int L = str == null ? 0 : str.length();
        if (L == 0) return 0;
        
        int s = 0;
        int e = 0;
        int longest = 0;
        int[] map = new int[128];
        while (e < L) {
            char c = str.charAt(e);
            if (map[c] > s) s = map[c];
            longest = Math.max(longest, e - s + 1);
            map[c] = e + 1;
            e++;
        }
        return longest;
        
    }
}
