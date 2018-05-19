class Solution {
    public int lengthOfLongestSubstring(String str) {
        final int L = str == null ? 0 : str.length();
        if (L == 0) return 0;
        
        int s = 0;
        int e = 0;
        int longest = 0;
        // ArrayDeque is a bit faster than HashSet per the Leetode result
        ArrayDeque<Character> q = new ArrayDeque<Character>();
        while (e < L) {
            char c = str.charAt(e);
            while (q.contains(c)) {
                q.pollFirst();
                s++;
            }
            q.addLast(c);
            longest = Math.max(longest, e - s + 1);
            e++;
        }
        return longest;
    }
}
