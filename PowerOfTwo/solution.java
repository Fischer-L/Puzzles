class Solution {
  public boolean isPowerOf2(int n) {
    return n > 0 && (n & (n-1) == 0);
  }
}
