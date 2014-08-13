package storeCredit;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class StoreCredit {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		
		String[] paths = {
			"./A-small-practice"
		};
		
		Puzzle[] puzzles;
		DividingMethod dividingMethod;
		
		for (String path: paths) {
			
			puzzles = readPuzzlesFile(path + ".in");
			
			dividingMethod = new DividingMethod(puzzles);
			
			printAns(dividingMethod.answers, path + "-dividingMethod.out");
		}
	}
	
	private static Comparator<Goods> sortGoods = new Comparator<Goods>() {
		@Override
		public int compare(Goods o1, Goods o2) {
			int diff = o1.price - o2.price;
			return (diff != 0) ? diff : o1.originalPos - o2.originalPos;
		}
	};
	
	private static Puzzle[] readPuzzlesFile(String path) {
		
		Puzzle[] ps = null;
		
		try {
			
			int i = 0;
			
			String credit, goods;
			
			BufferedReader br = FileUtil.bufferFileReader(FileUtil.openFile(path));
			
			ps = new Puzzle[ Integer.parseInt(br.readLine()) ];
			
			while ((credit = br.readLine()) != null) {
				
				br.readLine();
				
				goods = br.readLine();
				
				ps[i++] = (goods != null) ? new Puzzle(credit, goods) : new Puzzle();
			}
			
			br.close();
			
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return ps;
	}
	
	private static void printAns (Answer[] ans, String dstPath) {
		
		try {
			
			BufferedWriter bw = FileUtil.bufferFileWriter(FileUtil.openFile(dstPath));
			
			for (int i = 0; i < ans.length; i++) {
				bw.write(String.format("Case #%d: %d %d", i+1, ans[i].bought1st, ans[i].bought2nd));
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
	
	private static class Puzzle {
		
		public Puzzle() {
		}
		
		public Puzzle(String credit, String goods) {
			this.goods = goods;
			this.credit = credit;			
		}

		String goods = null;
		String credit = null;
	}
	
	private static class Goods {
		
		public Goods (int price, int originalPos) {
			this.price = price;
			this.originalPos = originalPos;
		}
		
		int price = -1;
		int originalPos = -1;
	}
	
	private static class Answer {
		
		public Answer (int bought1, int bought2) {
			
			if (bought1 < bought2) {
				
				this.bought1st = bought1;
				this.bought2nd = bought2;
				
			} else {
				
				this.bought1st = bought2;
				this.bought2nd = bought1;
				
			}			
		}
		
		int bought1st = -1;
		int bought2nd = -1;
	}
	
	private static class DividingMethod {
		
		public DividingMethod(Puzzle[] puzzles) {
			
			this.answers = new Answer[puzzles.length];
			
			for (int i = 0; i < puzzles.length; i++) {				
				this.answers[i] = this.buyGoods(puzzles[i]);				
			}			
		}
		
		public Answer[] answers;
		
		private Answer buyGoods(Puzzle p) {
			
			int i, j;
			
			
			String[] goods = p.goods.split(" ");
			int credit = Integer.parseInt(p.credit);
			
			int price,
				halfCredit = credit / 2;
			
			ArrayList<Goods> lesses = new ArrayList<Goods>();
			ArrayList<Goods> equals = new ArrayList<Goods>();
			ArrayList<Goods> biggers = new ArrayList<Goods>();
			
			for (i = goods.length-1; i >= 0; i--) {
				
				price = Integer.parseInt(goods[i]);
				
				if (price < halfCredit) {
					
					lesses.add(new Goods(price, i+1));
					
				} else if (price > halfCredit) {
					
					biggers.add(new Goods(price, i+1));
					
				} else {
					
					equals.add(new Goods(price, i+1));
					
				}
			}			
			Collections.sort(lesses, sortGoods);
			Collections.sort(equals, sortGoods);
			Collections.sort(biggers, sortGoods);

			Answer ans = null;
			
			if (equals.size() >= 2) {
				
				ans = new Answer(equals.get(0).originalPos, equals.get(1).originalPos);
				
			} else {
				
				for (i = lesses.size()-1; i >= 0; i--) {
					
					price = credit - lesses.get(i).price;
					
					for (j = 0; j < biggers.size(); j++) {
						
						if (price < biggers.get(j).price) {
							
							break;
							
						} else if (price == biggers.get(j).price) {
							
							ans = new Answer(lesses.get(i).originalPos, biggers.get(j).originalPos);
							break;
							
						}
					}
					
					if (ans != null) break;
				}
				
			}
			
			return ans;
		}
	}
}
