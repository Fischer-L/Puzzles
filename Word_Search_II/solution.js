/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const MAX_ROW = board.length - 1;
    const MAX_COL = MAX_ROW < 0 ? -1 : board[0].length - 1;
    let matches = new Set();
    let root = buildTrieTree(words);
    for (let row = 0; row <= MAX_ROW; ++row) {
        for (let col = 0; col <= MAX_COL; ++col) {
            searchTrieTree(board, row, col, root, matches, MAX_ROW, MAX_COL);
        }
    }
    return [ ...matches ];
};

class TrieNode {
    constructor() {
        this.children = {};
    }
}

function buildTrieTree(words) {
    let root = new TrieNode();
    words.forEach(str => {
        let n = root;
        let L = str.length;
        for (let i = 0; i < L; ++i) {
            let c = str[i];
            if (!n.children[c]) n.children[c] = new TrieNode();
            n = n.children[c];
        }
        if (!n.words) n.words = [];
        n.words.push(str);
    });
    return root;
}

function searchTrieTree(board, row, col, trie, matches, MAX_ROW, MAX_COL) {
    let c = board[row][col];
    let next = trie.children[c];
    
    if (!next) return;
    
    if (next.words) {
        let matched = next.words.find(str => str[str.length - 1] == c);
        if (matched) {
            matches.add(matched);
        }
    }
    
    board[row][col] = "null";
    if (row >= 1) searchTrieTree(board, row - 1, col, next, matches, MAX_ROW, MAX_COL);
    if (row < MAX_ROW) searchTrieTree(board, row + 1, col, next, matches, MAX_ROW, MAX_COL);
    if (col >= 1) searchTrieTree(board, row, col - 1, next, matches, MAX_ROW, MAX_COL);
    if (col < MAX_COL) searchTrieTree(board, row, col + 1, next, matches, MAX_ROW, MAX_COL);
    board[row][col] = c;
}
