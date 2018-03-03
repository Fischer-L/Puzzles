/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
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
};

var createEmptryRow = function (n) {
    let row = [];
    for (let i = 0; i < n; ++i) row.push(0);
    return row;
}

var createBottomRow = function (n) {
    let row = [];
    for (let i = 0; i < n; ++i) row.push(1);
    return row;
}
