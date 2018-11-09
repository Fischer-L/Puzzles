class Solution {
  public List<List<Integer>> combinationSum2(int[] candidates, int target) {
    ArrayList<List<Integer>> ans = new ArrayList<>();
    Arrays.sort(candidates);
    this.findCombinationa(target, candidates, 0, candidates.length, ans, new ArrayList<Integer>());
    return ans;
  }
  
  private void findCombinationa(int target, int[] candidates, int s, int e, ArrayList<List<Integer>> ans, ArrayList<Integer> combo) {
    if (target < 0) return;
    
    if (target == 0) {
      ans.add(combo.clone());
      return;
    }
    
    for (int i = s; i < e; i++) {
      int v = candidates[i];
      
      if (v > target) break;
      
      if (i != s && v == candidates[i-1]) {
      	continue;
      }
      
      combo.add(v);
      this.findCombinationa(target - v, candidate, i + 1, e, ans, combo);
      combo.remove(combo.size()-1);
    }
  }
}
