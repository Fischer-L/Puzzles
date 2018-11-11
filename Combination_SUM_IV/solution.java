class Solution {
  public int combinationSum4(int[] nums, int target) {
    Arrays.sort(nums);
    this.numMap = new Integer[target+1];
    return this.calcPossibleNum(nums, target);
  }
  
  private Integer[] numMap = null;
  
  private int calcPossibleNum(int[] nums, int target) {
    if (target <= 0) return target == 0 ? 1 : 0;
    
    if (this.numMap[target] != null) return this.numMap[target];
    
    int num = 0;
    for (int v : nums) {
      if (v > target) break;
      num += this.calcPossibleNum(nums, target-v);
    }
    this.numMap[target] = num;
    return num;
  }
}
