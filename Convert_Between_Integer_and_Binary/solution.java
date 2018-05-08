
class Solution {

  public int[] toBinary(int n) {
    int[] bin = new int[32]; 
    for (int i = 0; i < 32; i++) {
      bin[31-i] = (n & 1) == 1 ? 1 : 0;
      n >>>= 1;
    }
    return bin;
  }

  public int subBinary(int[] bin, int s, int e) {
    if (s > e || s < 0 || e > 31 || bin == null || bin.length < 32) return 0;
    int[] bits = Arrays.copyOfRange(bin, s, e+1);
    return this.fromBits(bits);
  }

  public int fromBits(int[] bits) {
    int btm = bits == null ? -1 : bits.length - 1;
    int top = btm == 31 ? 1 : 0;
    if (top > btm) return 0;
    
    int n = 0;
    int digit = 1;
    for (int i = btm; i >= top; --i) {
      n += bits[i] * digit;
      digit <<= 1;
    }
    
    if (top == 1) {
      if (bits[0] == 1) return n - 1 - (int) Math.pow(2, 31);
    }
    return n;
  }

}
