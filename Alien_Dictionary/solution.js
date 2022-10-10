function alienDictionary(words) {
  const { graph, heads } = buildGraph(words);
  const visited = new Set();
  const depth = {};
  let ans = '';

  function traverse (c, lv, order) {
    if (visited.has(c)) {
      return false;
    }

    lv++;

    if (depth[c] && depth[c] > lv) {
      return true;
    }
    depth[c] = lv;

    order += c;
    if (!graph[c]) {
      if (order.length > ans.length) {
        ans = order;
      }
      return true;
    }

    visited.add(c);

    const nextChars = graph[c];
    for (let i = 0; i < nextChars.length; i++) {
      if (!traverse(nextChars[i], lv, order)) {
        return false;
      }
    } 

    visited.delete(c);
    return true;
  }

  for (let i = 0; i < heads.length; i++) {
    if (!traverse(heads[i], 0, '')) {
      return '';
    }
  }
  return ans;
}

function buildGraph(words) {
  const graph = {};
  const children = new Set();
  for (let i = 0; i < words.length - 1; i++) {
    cmpWords(words[i], 0, words[i + 1], 0, graph, children);
  }

  const entries = Array.from(Object.entries(graph));

  return { 
    graph: entries.reduce((_graph, [ c, nextChars ]) => {
      _graph[c] = Array.from(nextChars);
      return _graph;
    }, {}),
    heads: entries.reduce((_heads, [ c, _ ]) => {
      if (!children.has(c)) {
        _heads.push(c);
      }
      return _heads;
    }, []),
  };
}

function cmpWords(w1, i1, w2, i2, graph, children) {
  if (i1 >= w1.length || i2 >= w2.length) {
    return;
  }

  const c1 = w1[i1];
  const c2 = w2[i2];
  if (c1 === c2) {
    cmpWords(w1, i1 + 1, w2, i2 + 1, graph, children);
    return;
  }

  if (!graph[c1]) {
    graph[c1] = new Set();;
  }
  graph[c1].add(c2);
  children.add(c2);
}
