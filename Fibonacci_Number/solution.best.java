class Solution {
  public int fib(int N) {
    if (N == 0) return 0;
    if (N == 1) return 1;
    int pre = 1;
    int pre2 = 0;
    while (N > 2) {
      int tmp = pre + pre2;
      pre2 = pre;
      pre = tmp;
      N--;
    }
    return pre + pre2;
  }
}
