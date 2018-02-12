/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let r = locateRow(target, matrix, 0, matrix.length - 1);
    let row = r >= 0 ? matrix[r] : null;
    if (row) return searchRow(target, row, 0, row.length - 1);
    return false;
};

var locateRow = function (target, matrix, start, end) {
    if (start > end) return -1;
    
    let mid = Math.floor((start + end) / 2);
    let row = matrix[mid];
    if (row.length <= 0) return -1;
        
    if (target < row[0]) {
        end = mid - 1;
    } else if (target >= row[0]) {
       if (target <= row[row.length-1]) {
           return mid;
       }
        start = mid + 1;
    }
    return locateRow(target, matrix, start, end);
}

var searchRow = function (target, row, start, end) {
    if (start > end) return false;
    
    let mid = Math.floor((start + end) / 2);
    let v = row[mid];
    if (target < v) {
        end = mid - 1;
    } else if (target > v) {
        start = mid + 1;
    } else {
        return true;
    }
    return searchRow(target, row, start, end);
}
