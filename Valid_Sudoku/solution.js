/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = [], cols = [];
    for (let i = 0; i < 9; ++i) {
        rows.push({});
        cols.push({});
    }
    
    let boxOrigins = [
        [0,0], [0,3], [0,6],
        [3,0], [3,3], [3,6],
        [6,0], [6,3], [6,6]
    ];
    let origin = boxOrigins.pop();
    while (origin) {
        let box = {};
        for (let r = origin[0] + 2; r >= origin[0]; --r) {
            for (let c = origin[1] + 2; c >= origin[1]; --c) {
                let v = board[r][c];
                if (v !== ".") {
                    if (box[v] || rows[r][v] || cols[c][v]) return false;
                    box[v] = 1;
                    rows[r][v] = 1;
                    cols[c][v] = 1;
                }
            }
        }
        origin = boxOrigins.pop();
    }
    return true;
};


