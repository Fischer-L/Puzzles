class Solution {
  public boolean isPowerOf4(int n) {
    return this.isPowerOf2(n) && (n-1) % 4 == 3;
  }
  
  public boolean isPowerOf2(int n) {
    return n > 0 && n & (n-1) == 0;
  }
}
