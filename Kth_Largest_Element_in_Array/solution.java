class Solution {
  public Integer findKthLargest(int[] nums, int kth) {
    return this.findKthSmallest(nums, nums.length - kth + 1);
  }

  public Integer findKthSmallest(int[] nums, int kth) {
    final int L = nums != null ? nums.length : 0;
    if (kth <= 0 || kth > L) return -1;
    kth--; // The 3rd means the index should be 2 so subtract by 1
    
    int start = 0; 
    int end = L - 1;
    int k = end; // The index of kth
    int leftCount = kth;
    int rightCount = kth;
    while (leftCount != kth - 1 || rightCount != L - kth - 1) {
      int sv = 0;
      int ev = 0;
      int s = start;
      int e = end - 1;
      k = end;
      int kv = nums[k];
      while (s <= e) {
        sv = nums[s];
        ev = nums[e];
        if (sv <= kv && ev > kv) {
          s++;
          e--;
        } else if (sv <= kv && ev <= kv) {
          s++;
        } else if (sv > kv && ev > kv) {
          e--;
        } else if (sv > kv && ev <= kv) {
          nums[s] = ev;
          nums[e] = sv;
          s++;
          e--;
        }
      }
      sv = nums[s];
      nums[s] = kv;
      nums[k] = sv;
      k = s;
      if (k < kth) {
          start = k + 1;
      } else if (k > kth) {
          end = k - 1;
      }
      leftCount = k - 1;
      rightCount = L - k - 1;
    }
    return nums[k];
  }

}
