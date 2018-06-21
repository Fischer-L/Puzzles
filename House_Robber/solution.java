class Solution {
    public int rob(int[] nums) {
        int p1 = 0;
        int p2 = 0;
        int current = 0;
        for (int n : nums) {
            current = Math.max(p1, n + p2);
            p2 = p1;
            p1 = current;
        }
        return p1;
    }
}
