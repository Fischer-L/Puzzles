/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const MAX_ROW = matrix ? matrix.length : 0;
    const MAX_COL = MAX_ROW > 0 ? matrix[0].length : 0;
    if (MAX_ROW == 0 || MAX_COL == 0) return 0;
    
    let left = 0;
    let maxLen = 0;
    let dp = [];
    let nextDP = [];
    for (let i = 0; i < MAX_COL; i++) {
        dp[i] = nextDP[i] = 0;
    }
    for (let r = 0; r < MAX_ROW; r++) {
        for (let c = 0; c < MAX_COL; c++) {
            let upper = dp[c]
            let upperLeft = c > 0 ? dp[c-1] : 0;
            let current = 0;
            if (matrix[r][c] === "1") {
                current = Math.min(Math.min(left, upper), upperLeft) + 1;
            }
            left = nextDP[c] = current;
            maxLen = Math.max(maxLen, current);
        }
        left = 0;
        let tmp = dp;
        dp = nextDP;
        nextDP = tmp;
    }
    return maxLen * maxLen;
};
