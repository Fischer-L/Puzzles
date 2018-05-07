class Solution {

  public int coinChange(int[] coins, int amount) {
    final int L = coins == null ? 0 : coins.length;
    if (amount <= 0) return 0;
    if (L == 0) return -1;
    
    int n = 0; // number of coins used
    ArrayList<Integer> amounts = new ArrayList<Integer>();
    ArrayList<Integer> nextAmounts = new ArrayList<Integer>();
    Set<Integer> amountSaw = new HashSet();
    amounts.add(0);
    while (amounts.size() > 0) {
      n++;

      for (int a : amounts) {
        for (int c : coins) {
          int sum = a + c;
          if (sum == amount) {
            return n;
          } else if (sum < amount && !amountSaw.contains(sum)) {
            amountSaw.add(sum);
            nextAmounts.add(sum);
          }
        }
      }
      
      ArrayList<Integer> tmp = amounts;
      amounts = nextAmounts;
      nextAmounts = tmp;
      nextAmounts.clear();
    }
    return -1;
  }

}
