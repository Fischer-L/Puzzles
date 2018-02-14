/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
};

var swimByDijkstra = function (grid) {
    const N = grid.length;
    let bestPaths = [];
    for (let i = 0; i < N; ++i) {
        bestPaths.push([]);
        for (let j = 0; j < N; ++j) {
            bestPaths[i].push({ t: -1, done: false, pos: {i, j}, source: {i: -1, j: -1} });
        }
    }
    bestPaths[0][0] = { t: grid[0][0], done: false, pos: {i: 0, j: 0}, source: {i: 0, j: 0} };
    
    let waitingNodes = {
        _nodes: [],
        push(...nodes) {
            this._nodes.push(...nodes);
            this._nodes.sort((a, b) => a.t - b.t);
        },
        popMin() {
            return this._nodes.shift();
        }
    };
    waitingNodes.push(bestPaths[0][0]);
    
    let node = waitingNodes.popMin();
    while (node) {
        node.done = true;
        
        let neighbors = getNeighbours(node, bestPaths, N);
        neighbors = neighbors.filter(nb => !nb.done);
        
        neighbors.forEach(nb => {
            let sources = getNeighbours(nb, bestPaths, N);
            sources = sources.filter(nb => nb.t >= 0);
            let min = sources.sort((a, b) => a.t - b.t)[0];
            if (nb.t == -1) nb.t = grid[nb.pos.i][nb.pos.j];
            if (min.t > nb.t) nb.t = min.t;
            nb.source.i = min.pos.i;
            nb.source.j = min.pos.j;
        });
        waitingNodes.push(...neighbors);
        node = waitingNodes.popMin();
    }
    return bestPaths[N-1][N-1].t;

    function getNeighbours(parent, bestPaths, N) {
        let {i, j} = parent.pos;
        let neighbors = [
            [i - 1, j],
            [i + 1, j],
            [i, j - 1],
            [i, j + 1]
        ];
        return neighbors.reduce((nodes, [i, j]) => {
            if (0 <= i && i < N && 0 <= j && j < N) {
                nodes.push(bestPaths[i][j]);
            }
            return nodes;
        }, []);
    }
}

var swimByBruteForce = function(grid) {
    let iMax = grid.length;
    let jMax = iMax ? grid[0].length : 0;
    
    var minTime = Number.MAX_SAFE_INTEGER;

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
    traverseGrid(-1, grid, [iMax, jMax], [0,0], null, []);
    console.log("minTime =", minTime);
    return minTime;
};

