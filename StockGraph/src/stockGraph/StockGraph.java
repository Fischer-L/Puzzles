package stockGraph;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Iterator;

public class StockGraph {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
				
		String[] inputs = {
			"CFF"
		};
		
		ArrayList<GraphRowY> yRows;
		ArrayList<StockPoint> points;
		
		for (String in : inputs) {
			
			points = collectStockPoints(in);			
			yRows = collectYRows(points);
			
			if (yRows.size() > 0) {				
				for (GraphRowY row : yRows) {
					row.print();
				}
				(new GraphRowX(points.size()+1)).print();
			}
		}
		
		try {
			System.in.read();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	private static class StockPoint {
		
		public StockPoint(int x, int y, String t) {
			this.xPos = x;
			this.yPos = y;
			this.type = t;
			this.graph = this.type.equals(StockPoint.TYPE_RISE) ? Graph.RISE : this.type.equals(StockPoint.TYPE_FALL) ? Graph.FALL : Graph.CONST;
		}
		
		public static final String TYPE_RISE = "R";
		public static final String TYPE_FALL = "F";
		public static final String TYPE_CONST = "C";

		public int xPos;
		public int yPos;
		public String type;
		public String graph;
	}
	
	private static class Graph {
		public static final String ORIGIN = "+";
		public static final String Y_AXIS = "| ";
		public static final String X_AXIS = "-";
		public static final String RISE = "/";
		public static final String FALL = "\\";
		public static final String CONST = "_";
	}
	
	private static abstract class GraphRow {
		public int currentXPos = -1;
		abstract public void print(); 
	}
	
	private static class GraphRowY extends GraphRow {
		
		public GraphRowY(int lv) {
			this.level = lv;
		}
		
		public int level = -1;
		
		public ArrayList<StockPoint> points = new ArrayList<StockPoint>();

		@Override
		public void print() {
			if (this.points.size() > 0) {
				
				int i, whitespace;
				StockPoint p;
				Iterator<StockPoint> itr = this.points.iterator();
				StringBuilder sb = new StringBuilder(Graph.Y_AXIS);
				
				while (itr.hasNext()) {
					
					p = itr.next();
					
					whitespace = p.xPos - this.currentXPos - 1; // The whitespace number
					for (i = 0; i < whitespace; i++) {
						sb.append(" ");
					}
					
					sb.append(p.graph);
					
					this.currentXPos++;
				}
				
				System.out.println(sb.toString());
			}
		}
		
	}
	
	private static class GraphRowX extends GraphRow {
		
		public GraphRowX(int length) {
			this.length = length;
		}
		
		private int length = 0;
		
		@Override
		public void print() {
			
			if (this.length > 0) {
				
				StringBuilder sb = new StringBuilder(Graph.ORIGIN);
				
				sb.append(Graph.X_AXIS);
				this.currentXPos++;
				
				while (this.currentXPos <= this.length) {
					sb.append(Graph.X_AXIS);
					this.currentXPos++;					
				}
				
				System.out.print(sb.toString());
			}
			
		}
	}
	
	private static ArrayList<StockPoint> collectStockPoints(String input) {
		
		int yLV, idx;
		
		String preType = "",
			   currentType = "";
		
		ArrayList<StockPoint> points = new ArrayList<StockPoint>();
		
		for (yLV = idx = 0; idx < input.length(); idx++) {
			
			currentType = String.valueOf(input.charAt(idx));
			
			if (idx > 0) {				
				
				if (preType.equals(StockPoint.TYPE_RISE)) {
					
					yLV = currentType.equals(StockPoint.TYPE_RISE) ? yLV + 1 : currentType.equals(StockPoint.TYPE_FALL) ? yLV : yLV + 1;
					
				} else if (preType.equals(StockPoint.TYPE_FALL)) {
					
					yLV = currentType.equals(StockPoint.TYPE_RISE) ? yLV : currentType.equals(StockPoint.TYPE_FALL) ? yLV - 1 : yLV;
					
				} else {
					
					yLV = currentType.equals(StockPoint.TYPE_RISE) ? yLV : currentType.equals(StockPoint.TYPE_FALL) ? yLV - 1 : yLV;			
				}
			}
			
			points.add(new StockPoint(idx, yLV, currentType));			
		
			preType = currentType;
		}
		
		if (points.size() > 0) {
			
			Collections.sort(points, new Comparator<StockPoint>() {
				@Override
				public int compare(StockPoint arg0, StockPoint arg1) {
					return arg0.yPos - arg1.yPos;
				}				
			});
			
			int offest = points.get(0).yPos;
			
			for (StockPoint p : points) {
				p.yPos -= offest;
			}			
		}
		
		return points;
	}
	
	private static ArrayList<GraphRowY> collectYRows(ArrayList<StockPoint> points) {
		
		GraphRowY row;
		ArrayList<GraphRowY> rows = new ArrayList<GraphRowY>();
		ArrayList<StockPoint> buf = new ArrayList<StockPoint>();
		
		if (points.size() > 0) {
			
			int i = points.size()-1,
				lv = points.get(i).yPos;
			
			for (; i >= 0; i--) {				
				
				if (lv == points.get(i).yPos) {
					
					buf.add(points.get(i));					
					
				}
				
				if (lv != points.get(i).yPos || i == 0) {
					
					Collections.sort(buf, new Comparator<StockPoint>() {
						@Override
						public int compare(StockPoint o1, StockPoint o2) {
							return o1.xPos - o2.xPos;
						}
					});
					
					row = new GraphRowY(lv);
					
					for (StockPoint p : buf) {						
						row.points.add(p);						
					}
					
					rows.add(row);
					
					buf.clear();
					
					lv = points.get(i).yPos;
					i++;
				}
			}			
		}
		
		return rows;
	}
}
