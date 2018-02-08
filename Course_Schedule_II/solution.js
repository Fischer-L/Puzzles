/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let path = [];
    if (prerequisites.length <= 0) {
        while(numCourses > 0) path.push(--numCourses);
        return path;
    }
    buildGraph(prerequisites);
    for (let h of heads) {
        if (!dfs(h, path, [])) return [];
    }
    return path.reverse();
};

var edges = {}

var heads = [];

var buildGraph = function (prerequisites) {
    let vertices = new Map();
    for (let [ to, from ] of prerequisites) {
        if (!edges[from]) edges[from] = [];
        edges[from].push(to);
        if (!vertices.has(to)) vertices.set(to, 0);
        if (!vertices.has(from)) vertices.set(from, 1);
        vertices.set(to, 0);
    }
    for (let [ v, isHead ] of vertices) {
        if (isHead) heads.push(v);
    }
}

var dfs = function (v, path, visiteds) {
    if (visiteds.includes(v)) return false;
    
    visiteds.push(v);
    let children = edges[v] || [];
    for (let child of children) {
        if (!path.includes(child)) {
            if (!dfs(child, path, visiteds)) return false;
        }
    }
    path.push(v);
    visiteds.pop();
    return true;
}

