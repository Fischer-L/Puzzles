/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let maxY = grid.length;
    let maxX = maxY ? grid[0].length : 0;
    let ans = 0;
    for (let y = 0; y < maxY; ++y) {
        for (let x = 0; x < maxX; ++x) {
            if (grid[y][x] == 1) {
                ans++;
                explore(y, x, maxY, maxX, grid);
            }
        }
    }
    return ans;
};

function explore(y, x, maxY, maxX, grid) {
    if (y < 0 || y >= maxY || x < 0 || x >= maxX) return;
    
    let stop = grid[y][x] != 1;
    grid[y][x] = -1;
    if(stop) return;
    
    explore(y, x+1, maxY, maxX, grid);
    explore(y, x-1, maxY, maxX, grid);
    explore(y+1, x, maxY, maxX, grid);
    explore(y-1, x, maxY, maxX, grid);
}

