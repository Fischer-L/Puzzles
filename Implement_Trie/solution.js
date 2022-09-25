class TrieNode {
  constructor ({ char = '', word = '', isRoot = false, parent = null  } = {}) {
    this.char = char;
    this.word = word;
    this.isRoot = isRoot;
    this.parent = parent;
    this.children = {};
  }
}

class Trie {
  constructor () {
    this.root = new TrieNode({ isRoot: true });
  }
  
  insert (word) {
    this._insert(this.root, word, 0);
  }
  
  _insert (node, word, i) {
    const N = word.length;
    if (i >= N) {
      return;
    }
    
    const c = word[i];
    let child = node.children[c];
    if (!child) {
      child = new TrieNode({ char: c, parent: node });
    }
    if (i === N - 1) {
      child.word = word;
    }
    node.children[c] = child;
    
    this._insert(child, word, i + 1);
  }
}
