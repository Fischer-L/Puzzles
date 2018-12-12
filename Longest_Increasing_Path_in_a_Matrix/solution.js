/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  const MAX_ROW = !matrix ? 0 : matrix.length;
  const MAX_COL = !MAX_ROW ? 0 : matrix[0].length;
  const dp = Array(MAX_ROW);
  for (let i = 0; i < MAX_ROW; i++) dp[i] = [];
  
  let longest = 0;
  for (let row = 0; row < MAX_ROW; row++) {
    for (let col = 0; col < MAX_COL; col++) {
      longest = Math.max(longest, search(Number.MIN_SAFE_INTEGER, dp, matrix, row, col, MAX_ROW, MAX_COL));
    }
  }
  return longest;
};

function search(preValue, dp, matrix, row, col, MAX_ROW, MAX_COL) {
  if (row < 0 || row >= MAX_ROW) return 0;
  if (col < 0 || col >= MAX_COL) return 0;
  
  const value = matrix[row][col];
  if (preValue >= value) return 0;
  
  if (dp[row][col]) return dp[row][col];
  
  let path = search(value, dp, matrix, row-1, col, MAX_ROW, MAX_COL);
  path = Math.max(path, search(value, dp, matrix, row+1, col, MAX_ROW, MAX_COL));
  path = Math.max(path, search(value, dp, matrix, row, col-1, MAX_ROW, MAX_COL));
  path = Math.max(path, search(value, dp, matrix, row, col+1, MAX_ROW, MAX_COL));
  dp[row][col] = 1 + path;
  return dp[row][col];
}
