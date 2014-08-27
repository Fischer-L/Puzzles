package fullBinaryTree;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Set;

public class FullBinaryTree {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		
		String[] path = {
			"./B-small-practice", "./B-large-practice"
		};
		
		int i;
		
		int[] ans;
		
		NodeMap nodes;
		
		String[][] puzzles;
		
		for (String f : path) {
			
			puzzles = readPuzzleFile(f + ".in");
			
			ans = new int[puzzles.length];
			
			for (i = 0; i < puzzles.length; i++) {
				
				nodes = edgesToNodes(puzzles[i]);
				
				ans[i] = trimBinaryTree(nodes);				
			}
			
			printAns(ans, f + ".out");
		}		
	}
	
	private static class NodeMap {
		
		private Set<Integer> keys = null;
		
		private Iterator<Integer> keysItr = null;
		
		private HashMap<Integer, Node> nodes = new HashMap<Integer, Node>();
		
		public int size() {
			return this.nodes.size();
		}
		
		public Node get(Integer key) {
			return this.nodes.get(key);
		}
		
		public void put(Node n) {
			this.nodes.put(n.value, n);			
		}
		
		public void rewind() {
			
			if (keys == null) {
				keys = this.nodes.keySet();
			}
			
			this.keysItr = this.keys.iterator();
		}
		
		public Node next() {
			
			if (keys == null) {
				this.rewind();
			}
			
			return this.keysItr.hasNext() ? this.nodes.get(keysItr.next()) : null;		
		}
	}
	
	private static class Node {
		
		public Node(int v) {
			this.value = v;
		}
		
		public Integer value = -1;
		
		public NodeMap children = new NodeMap();		
	}
	
	private static String[][] readPuzzleFile(String path) {
		
		String[][] puzzles = null;
		
		try {
			
			int i,
				edgeNum,
				puzzleNum;
			
			String line;
			
			BufferedReader br = FileUtil.bufferFileReader(FileUtil.openFile(path));
			
			puzzleNum = Integer.parseInt(br.readLine());
			
			puzzles = new String[puzzleNum][];
			
			puzzleNum = 0;
			while ((line = br.readLine()) != null) {
				
				edgeNum = Integer.parseInt(line) - 1;
				
				puzzles[puzzleNum] = new String[edgeNum];
								
				for (i = 0; i < edgeNum; i++){
					puzzles[puzzleNum][i] = br.readLine();			
				}
				
				puzzleNum++;
			}
			
			br.close();
			
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		
		return puzzles;
	}

	private static void printAns(int[] ans, String path) {
		
		try {
			
			BufferedWriter bw = FileUtil.bufferFileWriter(FileUtil.openFile(path));
			
			for (int i = 0; i < ans.length; i++) {
				bw.write(String.format("Case #%d: %d", i+1, ans[i]));
				bw.newLine();
			}
			
			bw.close();
			
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}		
	}
	
	private static NodeMap edgesToNodes(String[] edges) {
		
		NodeMap nodes = new NodeMap();
		
		int v0, v1;		
		Node n0, n1;		
		String[] vertices;
		
		for (String edge : edges) {
			
			vertices = edge.split(" ");
			v0 = Integer.parseInt(vertices[0]);
			v1 = Integer.parseInt(vertices[1]);
			
			n0 = nodes.get(v0);
			if (n0 == null) n0 = new Node(v0);
			n1 = nodes.get(v1);
			if (n1 == null) n1 = new Node(v1);
			
			n0.children.put(n1);
			n1.children.put(n0);
			
			nodes.put(n0);
			nodes.put(n1);
		}	
		
		return nodes;
	}
	
	private static int trimBinaryTree(NodeMap nodes) {
		
		Node n;
		
		int maxNodeCounts = Integer.MIN_VALUE;
		
		nodes.rewind();
		while ((n = nodes.next()) != null) {
			maxNodeCounts = Math.max(maxNodeCounts, calNodeCounts(n, n));
		}
		
		return nodes.size() - maxNodeCounts;
	}

	private static int calNodeCounts(Node root, Node rootParent) {	
		
		Node child;
		
		int maxDesNum = 1;
		
		int childrenNum = root.children.size();		
		if (root.children.get(rootParent.value) != null) { // Deduct the root's parent
			childrenNum--;
		}
		
		if (childrenNum == 2) {
			
			root.children.rewind();
			
			while ((child = root.children.next()) != null) {					
				if (child != rootParent) {
					maxDesNum += calNodeCounts(child, root);
				}
			}
			
		} else if (childrenNum >= 3) {
			
			ArrayList<Integer> counts = new ArrayList<Integer>();
			
			root.children.rewind();
			
			while ((child = root.children.next()) != null) {					
				if (child != rootParent) {
					counts.add(calNodeCounts(child, root));
				}
			}
			
			Collections.sort(counts, new Comparator<Integer>() {
				@Override
				public int compare(Integer o1, Integer o2) {
					return o2 - o1;
				}					
			});
			
			maxDesNum += counts.get(0) + counts.get(1);
		}
				
		return maxDesNum;
	}	
	
}
