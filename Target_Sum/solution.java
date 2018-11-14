class Solution {
  public int findTargetSumWays(int[] nums, int S) {
  	ArrayList<Integer> sums = new ArrayList<>();
    sums.add(0);
    for (int n : nums) {
      int end = sums.size();
      for (int i = 0; i < end; i++) {
        int v = sums.get(i);
        sums.set(i, v + n);
        sums.add(v - n);
      } 
    }
    return (int) sums.stream().filter(v -> v == S).count();
  }
}
