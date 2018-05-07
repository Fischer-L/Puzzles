import java.util.*;

class Solution {
  public int evalRPN(String[] tokens) {
    int last = tokens == null ? -1 : tokens.length - 1;
    if (last < 0) return 0;
    
    ArrayDeque<String> q = new ArrayDeque<String>();
    while (last >= 0) q.addFirst(tokens[last--]);
    return this.calcRPN(q);
  }

  private boolean isOperator(String token) {
    return token.equals("+") || token.equals("-") || token.equals("*") || token.equals("/"); 
  }

  private Integer calc(Integer left, String op, Integer right) {
    if (left == null || op == null || right == null) return null;
    if (op.equals("+")) return left + right;
    if (op.equals("-")) return left - right;
    if (op.equals("*")) return left * right;
    if (op.equals("/")) return left / right;
    return null;
  }

  private Integer calcRPN(ArrayDeque<String> tokens) {
    if (tokens.isEmpty()) return null;
    
    String t = tokens.pollLast();
    if (this.isOperator(t)) {
      Integer right = this.calcRPN(tokens);
      Integer left = this.calcRPN(tokens);
      return this.calc(left, t, right);
    }
    return Integer.parseInt(t);
    
  }
}
