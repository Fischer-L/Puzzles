class Solution {
    public List<String> findWords(char[][] board, String[] words) {
        ArrayList<String> matches = new ArrayList<String>();
        TrieNode root = TrieNode.buildTrieTree(words);
        
        return matches;
    }
}

class TrieNode {

    public HashMap<Character, TrieNode> children = new HashMap<Character, TrieNode>();
    
    public String word = null;
    
    public static TrieNode buildTrieTree(String[] words) {
        TrieNode root = new TrieNode();
        for (String word : words) {
            TrieNode parent = root;
            final int L = word.length();
            for (int i = 0; i < L; ++i) {
                char c = word.charAt(i);
                if (!parent.children.containsKey(c)) {
                    parent.children.put(c, new TrieNode());
                }
                parent = parent.children.get(c);
            }
            if (parent.word == null) parent.word = word;
        }
        return root;
    }
}


