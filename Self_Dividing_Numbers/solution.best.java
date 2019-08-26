class Solution {
  public List<Integer> selfDividingNumbers(int left, int right) {
    List<Integer> ans = new ArrayList<>();
    while (left <= right) {
      if (this.isSelfDividing(left)) ans.add(left);
      left++;
    }
    return ans;
  }
  
  private boolean isSelfDividing(int target) {
    int n = target;
    while (n > 0) {
      int d = n % 10;
      if (d == 0 || target % d != 0) return false;
      n = n / 10;
    }
    return true;
  }
}
