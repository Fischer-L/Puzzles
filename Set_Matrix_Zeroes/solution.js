/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rowsToFlip = new Set();
    let colsToFlip = new Set();
    for (let i = matrix.length - 1; i >= 0; --i) {
        let cols = matrix[i];
        for (let j = cols.length - 1; j >= 0; --j) {
            if (cols[j] == 0) {
                rowsToFlip.add(i);
                colsToFlip.add(j);
            }
        }
    }
    
    for (let row of rowsToFlip) {
        let nums = matrix[row];
        for (let i = nums.length - 1; i >= 0; --i) {
            nums[i] = 0;
        }
    }
    
    for (let col of colsToFlip) {
        for (let i = matrix.length - 1; i >= 0; --i) {
            matrix[i][col] = 0;
        }
    }
};
