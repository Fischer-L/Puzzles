
class Solution {
  maxKnaspack(capacity, vals, weights) {
    let itemCount = vals.length;
    let dp = this._createDP(itemCount + 1, capacity + 1);

    for (let i = 1; i < itemCount + 1; i++) {
      let offsetIndex = i - 1;
      for (let subCap = 1; subCap < capacity + 1; subCap++) {
        let sum1 = dp[i-1][subCap];

        let sum2 = 0;
        let remainder = subCap - weights[offsetIndex];
        if (remainder >= 0) {
          sum2 = vals[offsetIndex] + dp[i-1][remainder];
        }

        dp[i][subCap] = Math.max(sum1, sum2);
      }
    }

    return dp[itemCount][capacity];
  }

  _createDP(rows, cols) {
    let dp = [];
    for (let i = 0; i < rows; i++) {
      dp.push([]);
      for (let j = 0; j < cols; j++) dp[i].push(0);
    }
    return dp;
  }
}
