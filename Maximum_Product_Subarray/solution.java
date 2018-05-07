
class Solution {
  public int maxProduct(int[] nums) {
    final int L = nums == null ? 0 : nums.length;
    if (L == 0) return 0;
    
    int max = Integer.MIN_VALUE; 
    int product = 0;
    for (int i = 0; i < L; ++i) {
      if (product == 0) {
        product = nums[i];
      } else {
        product *= nums[i];
      }  
      max = Math.max(max, product);
    }
    
    product = 0;
    for (int i = L-1; i >= 0; --i) {
      if (product == 0) {
        product = nums[i];
      } else {
        product *= nums[i];
      }  
      max = Math.max(max, product);
    }
    return max;
  }
}
