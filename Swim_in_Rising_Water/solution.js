/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    let iMax = grid.length;
    let jMax = iMax ? grid[0].length : 0;
    traverseGrid(-1, grid, [iMax, jMax], [0,0], null, []);
    console.log("minTime =", minTime);
    return minTime;
};

var minTime = Number.MAX_SAFE_INTEGER;

// var populateMinTimeTable = function (grid) {
//     minTime = grid.map(row => row.slice());
//     minTime.forEach(row => {
//         row.forEach((v, i, row) => row[i] = Number.MAX_SAFE_INTEGER);
//     });
// }

var traverseGrid = function(currentTime, grid, limit, rootPos, parentPos, visitedPoses) {
    let [ri, rj] = rootPos;
    let neededTime = grid[ri][rj];
    if (neededTime > currentTime) currentTime = neededTime;
    
console.log("limit =", JSON.stringify(limit));
console.log("parentPos, rootPos =", JSON.stringify(parentPos), JSON.stringify(rootPos));
    
    if (isEnd(limit, rootPos)) {
        if (minTime > currentTime) minTime = currentTime;
        return;
    }
    if (currentTime > minTime) return;
    if (isVisited(visitedPoses, rootPos)) return;
    
    visitedPoses.push(rootPos);
    
    let children = getChildrenPos(limit, rootPos, parentPos);
    
console.log("visitedPoses =", JSON.stringify(visitedPoses));
console.log("children =", JSON.stringify(children));
    
    while (children.length > 0) {
        let child = children.pop();
console.log("child =", JSON.stringify(child));
console.log("");
        traverseGrid(currentTime, grid, limit, child, rootPos, visitedPoses);
    }
    visitedPoses.pop();
};

var getChildrenPos = function(limit, rootPos, parentPos) {
    let [i, j] = rootPos;
    let nodePos = [
        [i, j-1],
        [i, j+1],  
        [i-1, j],
        [i+1, j]
    ];
    
console.log("possible children =", JSON.stringify(nodePos));
    
    if (!parentPos) parentPos = limit;
    let children = [];
    for (let pos of nodePos) {
        if (0 <= pos[0] && pos[0] < limit[0] &&
            0 <= pos[1] && pos[1] < limit[1] &&
            (pos[0] != parentPos[0] || pos[1] != parentPos[1])
        ) {
            children.push(pos);
        }
    }
    return children;
};

var isEnd = function (limit, pos) {
    return pos[0] == limit[0] - 1 && pos[1] == limit[1] - 1;
}

var isVisited = function(visitedPoses, pos) {
    for (let i = visitedPoses.length - 1; i >= 0; --i) {
        let visited = visitedPoses[i];
        if (pos[0] == visited[0] && pos[1] == visited[1]) return true;
    }
    return false;
}
