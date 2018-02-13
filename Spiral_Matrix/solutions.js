/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let ans = [];
    let dir = "row-left-right";
    let row = -1, rowCeiling = -1, rowFloor = -1;
    let col = -1, colCeiling = -1, colFloor = -1;
    
    rowFloor = 0;
    if (matrix.length > 0) rowCeiling = matrix.length - 1;
    colFloor = 0;
    if (rowCeiling >= 0) colCeiling = matrix[0].length - 1;
    
    while (rowFloor <= rowCeiling && colFloor <= colCeiling) {
        let colNums = null;
        switch (dir) {
            case "row-left-right":
                colNums = matrix[rowFloor];
                for (col = colFloor; col <= colCeiling; ++col) {
                    ans.push(colNums[col]);
                }
                dir = "col-up-down";
                rowFloor++;
                break;
                
            case "col-up-down":
                col = colCeiling;
                for (row = rowFloor; row <= rowCeiling; ++row) {
                    ans.push(matrix[row][col]);
                }
                colCeiling--;
                dir = "row-right-left";
                break;
                
            case "row-right-left":
                colNums = matrix[rowCeiling];
                for (col = colCeiling; col >= colFloor; --col) {
                    ans.push(colNums[col]);
                }
                rowCeiling--;
                dir = "col-down-up";
                break;
                
            case "col-down-up":
                col = colFloor;
                for (row = rowCeiling; row >= rowFloor; --row) {
                    ans.push(matrix[row][col]);
                }
                colFloor++;
                dir = "row-left-right";
                break;
        }
    }
    return ans;
};

