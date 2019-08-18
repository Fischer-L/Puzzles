class Solution {
  public int[] sortArrayByParityII(int[] A) {
    int ans[] = new int[A.length];
    int evenIdx = 0;
    int oddIdx = 1;
    for (int v : A) {
      if (v % 2 == 0) {
        ans[evenIdx] = v;
        evenIdx += 2;
      } else {
        ans[oddIdx] = v;
        oddIdx += 2;
      }
    }
    return ans;
  }
}
