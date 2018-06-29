class Solution {
    public List<String> findWords(char[][] board, String[] words) {
        ArrayList<String> matches = new ArrayList<String>();
        TrieNode root = TrieNode.buildTrieTree(words);
        final int MAX_ROW = board.length;
        final int MAX_COL = board[0].length;
        for (int r = 0; r < MAX_ROW; r++) {
            for (int c = 0; c < MAX_COL; c++) {
                this.searchTrieTree(matches, root, board, r, c, MAX_ROW, MAX_COL);
            }
        }
        return matches;
    }
    
    public void searchTrieTree(ArrayList<String> matches, TrieNode node, char[][] board, int r, int c, int MAX_ROW, int MAX_COL) {
        char chr = board[r][c];
        TrieNode next = node.children.get(chr);
        if (next == null) return;
        
        if (next.word != null) {
            matches.add(next.word);
            next.word = null;
        }
        
        board[r][c] = ' ';
        if (r-1 >= 0) this.searchTrieTree(matches, next, board, r-1, c, MAX_ROW, MAX_COL);
        if (r+1 < MAX_ROW) this.searchTrieTree(matches, next, board, r+1, c, MAX_ROW, MAX_COL);
        if (c-1 >= 0) this.searchTrieTree(matches, next, board, r, c-1, MAX_ROW, MAX_COL);
        if (c+1 < MAX_COL) this.searchTrieTree(matches, next, board, r, c+1, MAX_ROW, MAX_COL);
        board[r][c] = chr;
    }
}

class TrieNode {

    public HashMap<Character, TrieNode> children = new HashMap<Character, TrieNode>();
    
    public String word = null;
    
    public static TrieNode buildTrieTree(String[] words) {
        TrieNode root = new TrieNode();
        for (String word : words) {
            TrieNode node = root;
            final int L = word.length();
            for (int i = 0; i < L; ++i) {
                char c = word.charAt(i);
                if (!node.children.containsKey(c)) {
                    node.children.put(c, new TrieNode());
                }
                node = node.children.get(c);
            }
            node.word = word;
        }
        return root;
    }
}


