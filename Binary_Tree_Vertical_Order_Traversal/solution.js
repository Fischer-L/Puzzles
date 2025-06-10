function solution (root) {

  const group = new Map();
  function addGroup (node, col) {
    if (!group.has(col)) {
      group.set(col, []);  
    }
    group.get(col).push(node);
  }

  let min = 0;
  let max = 0;
  let parents = [{
    node: root, col: 0,
  }];
  while (parents.length) {
    const children = [];
    for (let i = 0; i < parents.length; i++) {
      const { node, col } = parents[i];
      min = Math.min(min, col);
      max = Math.max(max, col);
      addGroup(node, col);

      const { left, right } = node;
      if (left) {
        children.push({ node: left, col: col - 1 });
      }
      if (right) {
        children.push({ node: right, col: col + 1 });
        
      }
    }
    parents = children;
  }

  const result = [];
  for (let col = min; col <= max; col++) {
    if (group.has(col)) {
      result.push(group.get(col));
    }
  }
  return result;
}
