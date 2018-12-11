class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
      HashMap<String, List<String>> map = new HashMap<>();
      
      for (String s : strs) {
        char[] chars = s.toCharArray();
        Arrays.sort(chars);
        String key = String.valueOf(chars);
        List<String> list = map.get(key);
        if (list == null) list = new ArrayList<String>();
        list.add(s);
        map.put(key, list);
      }
      
      return new ArrayList<List<String>>(map.values());
    }
}
