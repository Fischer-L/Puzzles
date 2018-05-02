class Solution {
  public int[] maxSlidingWindow_O_nk(int[] nums, int k) {
    final int L = nums.length;
    if (L == 0 || L < k) return new int[0];
   
    ArrayList<Integer> window = new  ArrayList<Integer>();
    int s = 0;
    int e = k-1;
    window.add(this.findMax(nums, s, e));
    int wSize = 1;
    while (e < L-1) {
      int max = window.get(wSize-1);
      s++;
      e++;
      if (max == nums[s-1]) {
        max = this.findMax(nums, s, e);
      } else if (max < nums[e]) {
        max = nums[e];
      }
      window.add(max);
      wSize++;
    }
    int[] maxNums = new int[wSize];
    for (int i = 0; i < wSize; ++i) maxNums[i] = window.get(i);
    return maxNums;
  }

  private int findMax(int[] nums, int s, int e) {
    int max = nums[s];
    for (int i = s; i <= e; ++i) {
       if (max < nums[i]) max = nums[i];
    }
    return max;
  }
}
