class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int end = 0;
        int start = gas.length - 1;
        int tank = start >= 0 ? gas[start] - cost[start] : -1;

        while (start > end) {
          if (tank < 0) {
           start--;
           tank += gas[start] - cost[start];
          } else {
           tank += gas[end] - cost[end];
           end++;
          }
        }
        return tank >= 0 ? start : -1;
    }
}
