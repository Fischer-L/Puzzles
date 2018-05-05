class Trie {

    /** Initialize your data structure here. */
    public Trie() {
        this.root = new Trie.Node(' ');
    }
    
    /** Inserts a word into the trie. */
    public void insert(String word) {
        final int L = word == null ? 0 : word.length();
        if (L == 0) return;
        
        char ch = ' ';
        Node parent = this.root;
        Node child = null;
        for (int i = 0; i < L; ++i) {
            ch = word.charAt(i);
            child = parent.children.get(ch);
            if (child == null) {
                child = new Trie.Node(ch);
                parent.children.put(ch, child);
            }
            if (i == L - 1) child.word = word;
            parent = child;
        }
    }
    
    /** Returns if the word is in the trie. */
    public boolean search(String word) {
        Trie.Node node = this.findLast(word);
        return node != null && node.word != null;
    }
    
    /** Returns if there is any word in the trie that starts with the given prefix. */
    public boolean startsWith(String prefix) {
        return this.findLast(prefix) != null;
    }
    
    private Trie.Node findLast(String word) {
        final int L = word == null ? 0 : word.length();
        if (L == 0) return null;
        
        Node parent = this.root;
        Node child = null;
        for (int i = 0; i < L; ++i) {
            child = parent.children.get(word.charAt(i));
            if (child == null) return null;
            parent = child;
        }
        return child;
    }
    
    private Trie.Node root;
    
    static class Node {
        public Node(char val) {
            this.val = val;
        }
        public char val = ' ';
        public String word = null;
        public Map<Character, Node> children = new HashMap<Character, Node>();
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */
