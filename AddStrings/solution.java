class Solution {
    public String addStrings(String a, String b) {
        StringBuilder sb = new StringBuilder();
        int i = a.length() - 1;
        int j = b.length() - 1;
        int carry = 0;
        while (i >= 0 || j >= 0) {
            carry += i >= 0 ? Character.getNumericValue(a.charAt(i)) : 0;
            carry += j >= 0 ? Character.getNumericValue(b.charAt(j)) : 0;
            sb.append(carry % 10);
            carry = carry >= 10 ? 1 : 0;
            i--;
            j--;
        }
        if (carry > 0) sb.append(carry);
        return sb.reverse().toString();
    }
}
