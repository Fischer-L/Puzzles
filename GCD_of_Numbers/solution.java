class Solution {
  int gcd(int[] nums) {
    final int L = nums.length;
    if (L == 2) return this._gcd(nums[0], nums[1]);
    
    int mod = Math.abs(nums[0] - nums[1]);
    for (let i = 2; i < L - 1; i++) {
      mod = Math.abs(nums[i] - mod);
    }
    return this._gcd(nums[L-1], mod);
  }
  
  int _gcd(int a, int b) {
    if (a == b) return a;
    if (a > b) return this._gcd(a - b, b);
    return this._gcd(a, b - a);
  }
}
