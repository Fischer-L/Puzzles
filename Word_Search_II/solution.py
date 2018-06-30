class Solution:
    def findWords(self, board, words):
        """
        :type board: List[List[str]]
        :type words: List[str]
        :rtype: List[str]
        """
        matches = []
        MAX_ROW = len(board)
        MAX_COL = len(board[0])
        root = TrieNode.buildTrieTree(words)
        
        for row in range(MAX_ROW):
            for col in range(MAX_COL):
                self.searchTrieTree(matches, root, board, row, col, MAX_ROW, MAX_COL)
        return matches
                
    def searchTrieTree(self, matches, node, board, row, col, MAX_ROW, MAX_COL):
        c = board[row][col]
        if c not in node.children: return
        
        next = node.children[c]
        if next.word != None: 
            matches.append(next.word)
            next.word = None
        
        board[row][col] = ' '
        if row - 1 >= 0: self.searchTrieTree(matches, next, board, row - 1, col, MAX_ROW, MAX_COL)
        if row + 1 < MAX_ROW: self.searchTrieTree(matches, next, board, row + 1, col, MAX_ROW, MAX_COL)
        if col - 1 >= 0: self.searchTrieTree(matches, next, board, row, col - 1, MAX_ROW, MAX_COL)
        if col + 1 < MAX_COL: self.searchTrieTree(matches, next, board, row, col + 1, MAX_ROW, MAX_COL)
        board[row][col] = c
        
class TrieNode:
    def __init__(self):
        self.word = None
        self.children = {}
        
    @staticmethod
    def buildTrieTree(words):
        root = TrieNode()
        for i in range(len(words)):
            node = root
            word = words[i]
            for c in word:
                if c not in node.children:
                    node.children[c] = TrieNode()
                node = node.children[c]
            node.word = word
        return root
