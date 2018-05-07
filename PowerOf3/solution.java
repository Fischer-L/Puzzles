class Solution {
  public boolean isPowerOf3(int n) {
    int maxPowOf3 = this.getTheMaxPowerOf3();
    return n >= 3 && (maxPowOf3 % n == 0);
  }
  
  private int getTheMaxPowerOf3() {
    // Let MAX_INT = 2 ** 31 - 1 = e ** a
    // Let MAX_POW_3 = 3 ** x = e ** b
    // So MAX_POW_3 < MAX_INT
    // => e ** b < e ** a
    // => b < a
    // => lg(3 ** x) < lg(MAX_INT)
    // => x * lg(3) < lg(MAX_INT)
    // => x <= lg(MAX_INT) / lg(3)
    double lg_3 = Math.log(3);
    double lg_MAX_INT = Math.log(Integer.MAX_VALUE);
    int maxExp = (int) Math.floor(lg_MAX_INT / lg_3);
    return (int) Math.pow(3, maxExp);
  }
}
