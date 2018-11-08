
class Solution {
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
      ArrayList<List<Integer>> ans = new ArrayList<>();
      Arrays.sort(candidates);
      this.findCombinationa(candidates, 0, candidates.length, ans, new ArrayList<Integer>());
      return ans;
    }
}
