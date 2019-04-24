class Solution {
  public int fourSumCount(int[] A, int[] B, int[] C, int[] D) {
    int count = 0;
    Map<Integer, Integer> sumsMap = this.calcSumsMap(A, B);
    for (int i : C) {
      for (int j : D) {
        int sum = -1 * (i + j);
        count += sumsMap.getOrDefault(sum, 0);
      }
    }
    return count;
  }

  private Map<Integer, Integer> calcSumsMap(int[] list1, int[] list2) {
    Map<Integer, Integer> sumsMap = new HashMap<>();
    for (int i: list1) {
      for (int j: list2) {
        int sum = i + j;
        sumsMap.put(sum, sumsMap.getOrDefault(sum, 0) + 1);
      }
    } 
   return sumsMap;
  }
}
