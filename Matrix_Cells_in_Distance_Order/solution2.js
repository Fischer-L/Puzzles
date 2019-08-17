/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
  let distances = [];
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      let d = Math.abs(r - r0) + Math.abs(c - c0);
      let cells = distances[d];
      if (!cells) cells = distances[d] = [];
      cells.push([r, c]);
    }
  }
  
  let ans = [];
  for (let cells of distances) {
    if (cells) {
      for (let cell of cells) ans.push(cell);
    }
  }
  return ans;
};
