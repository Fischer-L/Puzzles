class Solution {
  public double myPow(double x, int n) {
    if (n == 0) return 1;
      
    double ans;
    
    if (m.containsKey(n)) {
      ans = m.get(n);
    } else {
      ans = 1;
      double left = 1;
      double right = 1;
      if (n == 1) {
        left = x;
      } else if (n == 2) {
        left = right = x;
      } else if (n == -1) {
        left = 1 / x;
      } else if (n == -2) {
        left = right = 1 / x;
      } else {
        int m = n / 2;
        left = this.myPow(x, m);
        right = this.myPow(x, n - m);
      }
      ans = left * right;
      m.put(n, ans);
    }
    return ans;
  }

  private Map<Integer, Double> m = new HashMap<Integer, Double>();
}
