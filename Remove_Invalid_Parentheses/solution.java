class Solution {
    public List<String> removeInvalidParentheses(String s) {
        String[] strs = this.removeExtraRightParentheses(new String[] {s}, 0);
        strs = this.removeExtraLeftParentheses(strs, strs[0].length()-1);
        return Arrays.asList(strs);
    }
    
    private String[] removeExtraRightParentheses(String[] strs, int pos) {
        int count = 0;
        String str = strs[0];
        for (; pos < str.length(); pos++) {
            char c = str.charAt(pos);
            if (c == '(') {
                count += 1;
            } else if (c == ')') {
                count -= 1;
            }
            if (count == -1) break;
        }
        
        if (count == -1) {
            HashSet<String> set = new HashSet<String>();
            StringBuilder sb = new StringBuilder(strs[0].length());
            for (String s : strs) {
                for (int i = 0; i <= pos; i++) {
                    if (s.charAt(i) == ')') {
                        sb.append(s.substring(0, i));
                        sb.append(s.substring(i+1));
                        set.add(sb.toString());
                        sb.setLength(0);
                    }
                }
            }
            return this.removeExtraRightParentheses(set.toArray(new String[set.size()]), pos);
        }
        return strs;
    }
    
    private String[] removeExtraLeftParentheses(String[] strs, int pos) {
        int count = 0;
        String str = strs[0];
        for (; pos >= 0; pos--) {
            char c = str.charAt(pos);
            if (c == ')') {
                count += 1;
            } else if (c == '(') {
                count -= 1;
            }
            if (count == -1) break;
        }
        
        if (count == -1) {
            HashSet<String> set = new HashSet<String>();
            int strLen = strs[0].length();
            StringBuilder sb = new StringBuilder(strLen - 1);
            for (String s : strs) {
                for (int i = strLen - 1; i >= pos; i--) {
                    if (s.charAt(i) == '(') {
                        sb.append(s.substring(0, i));
                        sb.append(s.substring(i+1));
                        set.add(sb.toString());
                        sb.setLength(0);
                    }
                }
            }
            return this.removeExtraLeftParentheses(set.toArray(new String[set.size()]), pos-1);
        }
        return strs;
    }
}
