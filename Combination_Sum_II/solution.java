class Solution {
  public List<List<Integer>> combinationSum2(int[] candidates, int target) {
    ArrayList<List<Integer>> ans = new ArrayList<>();
    Arrays.sort(candidates);
    this.findCombinationa(target, candidates, 0, candidates.length, ans, new ArrayList<Integer>());
    return ans;
  }
  
  private void findCombinationa(int target, int[] candidates, int s, int e, ArrayList<List<Integer>> ans, ArrayList<Integer> combo) {
    int v = candidates[s];
  	target -= v;
    
    if (target < 0) return;
    
    combo.add(v);
    
    if (target == 0) {
      ans.add(combo.clone());
      return;
    }
    
    for (int i = s; i < e; i++) {
      if (i != s && candidates[i] == candidates[i-1]) {
      	continue;
      }
    }
  }
}
