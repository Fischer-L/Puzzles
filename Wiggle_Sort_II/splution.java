class Solution {
  public void wiggleSort_Space_n(int[] nums) {
    final int L = nums != null ? nums.length : 0;
    if (L <= 1) return;
    
    int m = this.findMedianIdx(nums, L);
    int[] copy = Arrays.copyOfRange(nums, 0, L);
    int med = nums[m];
    for (int i = 0, mLower = 0, mUpper = L - 1; i < mUpper;) {
      int n = copy[i];
      if (n < med) {
        this.swap(copy, i++, mLower++);
      } else if (n > med) {
        this.swap(copy, i, mUpper--);
      } else {
        i++;
      }
    }
      
    for (int i = 0, j = m; j >= 0; i += 2, j--) nums[i] = copy[j];
    for (int i = 1, j = L-1; j > m; i += 2, j--) nums[i] = copy[j];
  }
  
  private int findMedianIdx(int[] nums, final int L) {
    int kth = (int) Math.ceil(L / 2.0) - 1;
    int start = 0;
    int end = L - 1;
    int k = kth -1;
    int s = 0;
    int e = 0;
    int kv = 0;
    int sv = 0;
    int ev = 0;
    
    while (k != kth) {
      s = start;
      e = end - 1;
      k = end;
      kv = nums[k];
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
          this.swap(nums, s, e);
          s++;
          e--;
        }
      }
      this.swap(nums, s, k);
      k = s;
      if (k < kth) {
        start = k + 1;
      } else if (k > kth) {
        end = k - 1;
      }
    }
    return k;
  }
    
  private void swap(int[] nums, int i, int j) {
    int tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  }

}
