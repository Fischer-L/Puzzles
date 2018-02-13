/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const N = matrix.length <= 0 ? -1 : matrix.length - 1;
    let rowFloor = 0;
    let colFloor = 0;
    let rowCeiling = N;
    let colCeiling = N;
    let row = -1, col = -1;
    while (rowFloor < rowCeiling && colFloor < colCeiling) {
        row = rowFloor;
        col = colFloor;
        while (col < colCeiling) {
            rotateOnce(matrix, row, col, N);
            ++col;
        }
        rowFloor++;
        colFloor++;
        rowCeiling--;
        colCeiling--;
    }
};

var rotateOnce = function (matrix, startRow, startCol, N) {
    let row = startRow, col = startCol;
    let buf = matrix[startRow][startCol];
    while (row >= 0) {
        let [ oldRow, oldCol ] = new2OldPos(row, col, N);
        if (oldRow == startRow && oldCol == startCol) {
            matrix[row][col] = buf;
            row = -1;
        } else {
            matrix[row][col] = matrix[oldRow][oldCol];
            [ row, col ] = [ oldRow, oldCol ];
        }
    }
}

var old2NewPos = function(row, col, length) {
    let newRow = col;
    let newCol = length - row;
    return [newRow, newCol];
}

var new2OldPos = function(row, col, length) {
    let oldRow = length - col;
    let oldCol = row;
    return [oldRow, oldCol];
}
