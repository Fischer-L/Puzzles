class Solution {
  public int findTargetSumWays(int[] nums, int S) {
    Map<Integer, Integer> prevMap = new HashMap<>();
    Map<Integer, Integer> currMap = new HashMap<>();
    List<Integer> prevSums = new ArrayList<>();
    List<Integer> currSums = new ArrayList<>();
    prevSums.add(0);
    prevMap.put(0, 1);
    for (int n : nums) {
      currMap.clear();
      currSums.clear();
      int end = prevSums.size();
      for (int i = 0; i < end; i++) {
        int s = prevSums.get(i);
        int sCount = prevMap.get(s);
        this.updateCurrent(s + n, sCount, currMap, currSums);
        this.updateCurrent(s - n, sCount, currMap, currSums);
      }
      Map<Integer,Integer> bufMap = prevMap;
      List<Integer> bufSums = prevSums;
      prevMap = currMap;
      prevSums = currSums;
      currMap = bufMap;
      currSums = bufSums;
    }
    return prevMap.getOrDefault(S, 0);
  }
  
  private void updateCurrent(int v, int prevCount, Map<Integer, Integer> currMap, List<Integer> currSums) {
  	int currCount = currMap.getOrDefault(v, 0);
    if (currCount == 0) currSums.add(v);
    currMap.put(v, currCount + prevCount);
  }
}
