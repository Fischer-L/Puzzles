class Solution {
  public List<List<Integer>> combinationSum(int[] candidates, int target) {
    final int L = candidates.length;
    Arrays.sort(candidates);
  	ArrayList<List<Integer>> ans = new ArrayList<List<Integer>>();
    for (int i = 0; i < L; i++) {
      ArrayList<List<Integer>> combo = this.sumCombo(candidates, i, L, target);
      if (combo != null) ans.addAll(combo);
    }
    return ans;
  }
  
  private ArrayList<List<Integer>> sumCombo(int[] candidates, int s, int e, int target) {
    int prefix = candidates[s];
  	target -= prefix;
    
    if (target < 0) return null;
    
    ArrayList<List<Integer>> combo = new ArrayList<List<Integer>>();
    
    if (target == 0) {
      ArrayList<Integer> subCombo = new ArrayList<Integer>();
      subCombo.add(prefix);
      combo.add(subCombo);
      return combo;
    }
 	
    for (int i = s; i < e; ++i) {
      ArrayList<List<Integer>> subCombo = this.sumCombo(candidates, i, e, target);
      if (subCombo != null) {
        for (int j = subCombo.size() - 1; j >= 0; j--) subCombo.get(j).add(prefix);
        combo.addAll(subCombo);
      } else if (candidates[i] > target) {
      	break;
      }
    }
    return combo.size() > 0 ? combo : null;
  }
}
