class Solution {
  public List<List<Integer>> combinationSum2(int[] candidates, int target) {
    ArrayList<List<Integer>> ans = new ArrayList<>();
    Arrays.sort(candidates);
    this.findCombinationa(target, candidates, 0, candidates.length, ans, new ArrayList<Integer>());
    return ans;
  }
  
  private void findCombinationa(int target, int[] candidates, int s, int e, ArrayList<List<Integer>> ans, ArrayList<Integer> combo) {
  	
  }
}
