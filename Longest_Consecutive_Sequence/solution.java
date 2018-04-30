class Solution {
    public int longestConsecutive(int[] nums) {
        final int L = nums.length;
        if (L <= 1) return L;
        
        HashMap<Integer, Position> path = new HashMap<Integer, Position>();
        for (int i = 0; i < L; ++i) path.put(nums[i], new Position(i, -1));
        
        Stack<Integer> heads = new Stack<Integer>();
        for (int i = 0; i < L; ++i) {
            int n = nums[i];
            Position p = path.get(n+1);
            if (p != null) path.get(n).next = p.here;
            if (!path.containsKey(n-1)) heads.push(i);
        }
        
        int length = 1;
        int longest = 1;
        while (!heads.isEmpty()) {
            int i = heads.pop();
            int n = nums[i];
            while (path.get(n).next >= 0) {
                length++;
                n = nums[path.get(n).next];
            }
            if (length != 1) {
                longest = Math.max(longest, length);
                length = 1;
            }
        }
        return longest;
    }
    
    static class Position {
        public Position(int here, int next) {
            this.here = here;
            this.next = next;
        }
        public int here;
        public int next;
    }
}
