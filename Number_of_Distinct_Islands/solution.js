/**
 * grid {int[][]}
 */
function numDistinctIslands (grid) {
  const M = grid.length;
  const N = grid[0].length;
  
  const distinctCoordinates = new Set();
  for (let m = 0; m < M; m++) {
    for (let n = 0; n < N; n++) {
      if (!isLand(grid, m, n, M, N)) {
        continue;
      }
      const coordinates = [];
      dfs(grid, m, n, M, N, m, n, coordinates);
      distinctCoordinates.add(JSON.stringify(coordinates));
    }
  }
  return distinctCoordinates.size;
}

function isLand (grid, m, n, M, N) {
  if (0 <= m && m < M && 0 <= n && n < N) {
    return grid[m][n] === 1;
  }
  return false;
}

function dfs (grid, m, n, M, N, mOffset, nOffset, coordinates) {
  if (!isLand(grid, m, n, M, N)) {
    return;
  }
  grid[m][n] = -1;
  
  coordinates.push([ m - mOffset, n - nOffset ]);
  
  dfs(grid, m-1, n, M, N, mOffset, nOffset, coordinates);
  dfs(grid, m+1, n, M, N, mOffset, nOffset, coordinates);
  dfs(grid, m, n-1, M, N, mOffset, nOffset, coordinates);
  dfs(grid, m, n+1, M, N, mOffset, nOffset, coordinates);
}
