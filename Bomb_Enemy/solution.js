function bombEnemy(grid) {
  const R = grid.length - 1;
  const C = grid[0].length - 1;
  let colCount = [];
  for (let i = 0; i <= C; ++i) colCount.push(0);
  
  let maxCount = 0;
  
  for (let r = 0; r <= R; ++r) {
    let rowCount = 0;
    for (let c = 0, begin = 0; c <= C; ++c) {
      if (r == 0 || grid[r-1][c] == "W") {
        colCount[c] = calcColEnemys(c, r, R, grid);
      }
      if (rowCount == 0) begin = c;
      
      let v = grid[r][c];
      if (v == "E") {
        rowCount++;
      } else if (v == "W" || c == C) {
        for (let i = begin; i < c; ++i) {
          maxCount = Math.max(maxCount, rowCount + colCount[i]);
        }
        rowCount = 0;
      }
    }
  }
  
  return maxCount;
}

function calcColEnemys(c, r, R, grid) {
  let count = 0;
  for (; r <= R; ++r) {
    let v = grid[r][c];
    if (v == "E") count++;
    if (v == "W") break;
  }
  return count;
}
