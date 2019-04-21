class Solution {
  public int fourSumCount(int[] A, int[] B, int[] C, int[] D) {
    Map<String, Map<Integer, Integer>> sumsMap1 = this.calcSumsMap(A, B);
    Map<String, Map<Integer, Integer>> sumsMap2 = this.calcSumsMap(C, D);
    int count1 = this.calcSumOfZeros(sumsMap1.get("positive"), sumsMap2.get("negative"));
    int count2 = this.calcSumOfZeros(sumsMap1.get("negative"), sumsMap2.get("positive"));
    int count3 = this.calcSumOfZeros(sumsMap1.get("zero"), sumsMap2.get("zero"));
    return count1 + count2 + count3;
  }

  private Map<String, Map<Integer, Integer>> calcSumsMap(int[] list1, int[] list2) {
    Map<String, Map<Integer, Integer>> sumsMap = new HashMap<String, Map<Integer, Integer>>();
      
      for (int i: list1) {
          for (int j: list2) {
              int sum = i + j;
              String key = "zero";
              if (sum > 0) {
                  key = "positive";
              } else if (sum < 0) {
                  key = "negative";
              }
              
              if (!sumsMap.containsKey(key)) {
                  sumsMap.put(key, new HashMap<Integer, Integer>());
              }
              Map<Integer, Integer> sums = sumsMap.get(key);
              
              if (sums.containsKey(sum)) {
                  sums.put(sum, 1 + sums.get(sum));
              } else {
                  sums.put(sum, 1);
              }
          }
      }
      
      return sumsMap;
  }

  private int calcSumOfZeros(Map<Integer, Integer> sums1, Map<Integer, Integer> sums2) {
      if (sums1 == null || sums2 == null) return 0;
      
      int total = 0;
      for (Map.Entry<Integer, Integer> entry: sums1.entrySet()) {
        Integer key = -1 * entry.getKey();
        total += entry.getValue() * sums2.getOrDefault(key, 0);
      }
      return total;
  }
}
