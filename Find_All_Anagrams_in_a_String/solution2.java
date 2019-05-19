class Solution {
  public List<Integer> findAnagrams(String s, String p) {
    ArrayList<Integer> ans = new ArrayList<>();
    
    if (s == null || p == null) return ans;
    
    int sLen = s.length(), pLen = p.length();
    if (sLen == 0 || pLen == 0 || sLen < pLen) return ans;
    
    int b = 0, e = 0, lackCount = pLen;
    int[] lackMap = new int[26];
    for (char c : p.toCharArray()) {
      lackMap[c - 'a']++;
    }
    
    int pos;
    while (e < pLen) {
      pos = s.charAt(e) - 'a';
      lackMap[pos]--;
      if (lackMap[pos] >= 0) lackCount--;
      e++;
    }
    if (lackCount == 0) ans.add(b);
    
    while (e < sLen) {
      pos = s.charAt(b) - 'a';
      lackMap[pos]++;
      if (lackMap[pos] > 0) lackCount++;
      b++;
      
      pos = s.charAt(e) - 'a';
      lackMap[pos]--;
      if (lackMap[pos] >= 0) lackCount--;
      e++;
      
      if (lackCount == 0) ans.add(b);
    }
    
    return ans;
  }
}
