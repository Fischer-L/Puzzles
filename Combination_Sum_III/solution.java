class Solution {
  public List<List<Integer>> combinationSum3(int k, int n) {
    ArrayList<List<Integer>> ans = new ArrayList<>();
    List candidates = this.createCandidates(n);
    this.findCombinationa(k, n, candidates, 0, candidates.size(), ans, new ArrayList<Integer>());
    return ans;
  }
  
  private List<Integer> createCandidates(int n) {
    ArrayList<Integer> candidates = new ArrayList<>();
    for (int i = 1; i < 10 && i <= n; i++) candidates.add(i);
    return candidates;
  }
  
  private void findCombinationa(int k, int target, List<Integer> candidates, int s, int e, ArrayList<List<Integer>> ans, ArrayList<Integer> combo) {
    if (k == 0 || target < 0) {
      if (target == 0) {
        ans.add((ArrayList) combo.clone());
      }
      return;
    }
    
    for (int i = s; i < e; i++) {
      int v = candidates.get(i);
      
      if (v > target) break;
      
      if (i != s && v == candidates.get(i-1)) {
      	continue;
      }
      
      combo.add(v);
      this.findCombinationa(k-1, target-v, candidates, i + 1, e, ans, combo);
      combo.remove(combo.size()-1);
    }
  }
}
