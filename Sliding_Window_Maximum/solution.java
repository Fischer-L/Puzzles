class Solution {
  
  public int[] maxSlidingWindow_O_n(int[] nums, int k) {
    final int L = nums.length;
    if (L == 0 || L < k) return new int[0];

    int wIdx = 0;
    int[] window = new int[L - k + 1];
    ArrayDeque<Integer> q = new ArrayDeque<Integer>();
    
    for (int i = 0; i < L; ++i) {
      while (!q.isEmpty() && q.peekFirst() < i - k + 1) q.pollFirst();
      int n = nums[i];
      while (!q.isEmpty() && n >= nums[q.peekLast()]) q.pollLast();
      q.addLast(i);
      if (i >= k-1) window[wIdx++] = nums[q.peekFirst()];
    }

    return window;      
  }
  
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
