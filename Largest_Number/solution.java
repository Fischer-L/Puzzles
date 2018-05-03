class Solution {
  public String largestNumber(int[] nums) {
     for (int n : nums) {
       String s = Integer.toString(n);
       String k = s.substring(0, 1);
       this.m.get(k).add(s);
     }
     
     for (String k : this.keys) {
       ArrayList<String> strs = this.m.get(k);
       if (strs.size() > 0) {
         this.sort(strs);
       }
     }
     
     StringBuilder sb = new StringBuilder();
     for (String k : this.keys) {
       if (!k.equals("0")) {
         ArrayList<String> strs = this.m.get(k);
         if (strs.size() > 0) {
           for (String s : strs) sb.append(s);
         }
       }
     }
     
     ArrayList<String> strs = this.m.get("0");
     if (strs.size() > 0) {
       if (sb.length() > 0) {
         for (String s : strs) sb.append(s);
       } else {
         sb.append("0");
       }
     }
     return sb.toString();
  }

  public Solution() {
    for (String k : this.keys) m.put(k, new ArrayList<String>());
  }

  private String[] keys =  { "9", "8", "7", "6", "5", "4", "3", "2", "1", "0" };

  private HashMap<String, ArrayList<String>> m = new HashMap<String, ArrayList<String>>();
 
  private void sort(ArrayList<String> strs) {
    Collections.sort(strs, new Comparator<String>() {
      @Override
      public int compare(String a, String b) {
        String ab = a + b;
        String ba = b + a;
        return ba.compareTo(ab);
      }
    });
  }

}
