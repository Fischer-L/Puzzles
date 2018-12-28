class Solution {
  public int numJewelsInStones(String J, String S) {
    int[] jewels = new int[('z' - 'A') + 1];
    for (int i = J.length() - 1; i >= 0; i--) {
      jewels['z' - J.charAt(i)] = 1;
    }
    
    int num = 0;
    for (int i = S.length() - 1; i >= 0; i--) {
      num += jewels['z' - S.charAt(i)];
    }
    return num;
  }
}
