/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    return shortSolution(m, n);
};

function shortSolution(m, n) {
    if (m <= 0 || n <= 0) return 0;
    
    let ans = [];
    ans.length = m;
    ans.fill(1);
    
    for (n--; n > 0; n--) {
        for (let i = 1; i < m; i++) {
            ans[i] += ans[i-1];
        }
    }
    
    return ans[m-1];
}

function longSolution(m, n) {
    function createEmptryRow(n) {
        let row = [];
        for (let i = 0; i < n; ++i) row.push(0);
        return row;
    }

    function createBottomRow(n) {
        let row = [];
        for (let i = 0; i < n; ++i) row.push(1);
        return row;
    }

    let nextRow = createBottomRow(n);
    let currentRow = nextRow;
    --m;
    while (m) {
        currentRow = createEmptryRow(n);
        for (let i = 0; i < n; ++i) {
            let accum = nextRow[i];
            if (i > 0) {
               accum += currentRow[i-1];
            }
            currentRow[i] = accum;
        }
        nextRow = currentRow;
        --m;
    }
    return currentRow[n-1];
}
