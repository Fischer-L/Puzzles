class Solution {
  public List<List<String>> partition(String s) {
    final int ceil = s != null ? s.length() : 0;
    return this.backtrackingDP(s, 0, ceil-1);
  }
    
  private HashMap<String, ArrayList<List<String>>> palinDP = new HashMap<String, ArrayList<List<String>>>();
    
  private ArrayList<List<String>> backtrackingDP(String str, int s, int e) {
      if (s > e) return null;
      
      String key = this.key(s, e);
      if (this.palinDP.containsKey(key)) return this.palinDP.get(key);
      
      ArrayList<List<String>> combs = new ArrayList<List<String>>();
      ArrayList<List<String>> subCombs = null;
      for (int i = s; i <= e; ++i) {
          if (this.isPalindrome(str, s, i)) {
              if (i < e) {
                  subCombs = this.backtrackingDP(str, i+1, e);
                  if (subCombs != null) {
                      String first = str.substring(s, i+1);
                      for (List<String> ls : subCombs) {
                          ArrayList<String> comb = new ArrayList<String>();
                          comb.add(first);
                          comb.addAll(ls);
                          combs.add(comb);
                      }
                  }
              } else {
                  ArrayList<String> comb = new ArrayList<String>();
                  comb.add(str.substring(s, e+1));
                  combs.add(comb);
              }
          }
      }
      
      this.palinDP.put(key, combs);
      return combs;
  }

  private Map<String, Boolean> palinMap = new HashMap<String, Boolean> ();
    
  private StringBuilder sb = new StringBuilder();
 
  private String key(int s, int e) {
    sb.delete(0, sb.length());
    sb.append(s);
    sb.append("-");
    sb.append(e);
    return sb.toString();
  }

  private boolean isPalindrome(String str, int s, int e) {
    String key = this.key(s, e);
    if (this.palinMap.containsKey(key)) return this.palinMap.get(key);
    while (s <= e) {
      if (str.charAt(s) != str.charAt(e)) {
        this.palinMap.put(key, false);
        return false;
      }
      s++;
      e--;
    }
    this.palinMap.put(key, true);
    return true;
  }


}
