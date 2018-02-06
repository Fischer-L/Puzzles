/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    buildGraph(equations, values);
    return queries.map(([a, b]) => {
        const ia = keys.indexOf(a);
        const ib = keys.indexOf(b);
        if (ia >= 0 && ib >= 0) {
            return graph[ia][ib];
        }
        return -1;
    });
};

var graph = [];
var keys = [];

var buildGraph = function(equations, values) {
    let L = equations.length;
    for (let i = 0; i < L; ++i) {
        const [ a, b ] = equations[i];
        if (!keys.includes(a)) keys.push(a);
        if (!keys.includes(b)) keys.push(b);
    }
    keys.map(() => -1).forEach((v, i, arr) => graph.push(arr.slice()));
    
    for (let i = 0; i < L; ++i) {
        const [ a, b ] = equations[i];
        const v = values[i];
        const ia = keys.indexOf(a);
        const ib = keys.indexOf(b);
        if (graph[ia][ib] <= 0) {
            graph[ia][ib] = v;
            graph[ib][ia] = 1 / v;
        }
    }
    
    L = keys.length;
    for (let i = 0; i < L; ++i) {
        for (let j = 0; j <= i; ++j) {
            if (i == j) {
                graph[i][j] = 1;
            } else if (graph[i][j] <= 0) {
                for (let k = 0; k < i; ++k) {
                    if (graph[i][k] > 0 && graph[k][j] > 0) {
                        graph[i][j] = graph[i][k] * graph[k][j];
                        graph[j][i] = 1 / graph[i][j];
                        break;
                    }
                }
            }
        }
    }
}
