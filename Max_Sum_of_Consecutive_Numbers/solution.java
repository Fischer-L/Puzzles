
class Solution {
  public int maxSumOfConsecutiveNumbers(int[] nums) {
    final int L = nums == null ? 0 : nums.length;
    if (L == 0) return 0;
    
    Map<Integer, NumNode> map = new HashMap<Integer, NumNode>();
    for (int i = 0; i < L; ++i) {
      map.put(nums[i], new NumNode(i, i));
    }
    
    ArrayList<Integer> heads = new ArrayList<Integer>();
    for (int i = 0; i < L; ++i) {
      int n = nums[i];
      NumNode next = map.get(n+1);
      if (next != null) map.get(n).next = next.here;
      if (map.containsKey(n-1) == false) heads.add(n);
    }
    
    int max = Integer.MIN_VALUE;
    for (int h : heads) {
      int sum = h;
      NumNode node = map.get(h);
      while (node.here != node.next) {
        int n = nums[node.next];
        sum += n;
        node = map.get(n);
      }
      if (sum > max) max = sum;
    }
    return max;
  }

  static class NumNode {
    public NumNode(int here, int next) {
      this.here = here; this.next = next;
    }
    public int here = -1;
    public int next = -1;
  }
}
