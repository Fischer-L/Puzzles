/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let i = matrix.length - 1;
    let j = 0;
    let maxJ = i >= 0 ? matrix[i].length : 0;
    while (i >= 0 && j < maxJ) {
      v = matrix[i][j];
      if (v == target) {
          return true;
      } else if (v < target) {
          ++j;
      } else {
          --i;
      }
    }
    return false;
};
