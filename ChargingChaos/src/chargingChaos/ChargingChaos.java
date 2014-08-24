package chargingChaos;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.BitSet;

public class ChargingChaos {

	/**
	 * @param args
	 */
	public static void main(String[] args) {

		String[] files = {
			"./test", "./A-small-practice", "./A-large-practice"	
		};
		
		int i, j, k, caseCount;
		
		int[] flipCounts = null;
		
		boolean isFlipped;
		
		Puzzle[] ps;
		BitSet cand, clone;
		BitSet[] outs, devs;
		ArrayList<BitSet> cands = new ArrayList<BitSet>();
		
		for (String f : files) {
			
			ps = readPuzzleFile(f+ ".in");
			
			flipCounts = new int[ps.length];
			
			caseCount = 0;
			
			for (Puzzle p : ps) {
				
				outs = toBitSets(p.outlets);
				devs = toBitSets(p.devices);
				
				
				cands.clear();
				for (i = outs.length-1; i >= 0; i--) {					
					cand = (BitSet) devs[0].clone();					
					cand.xor(outs[i]);					
					cands.add(cand);
				}
				
								
				for (i = 1; i < devs.length; i++) {
					
					for (j = cands.size()-1; j >= 0; j--) {						
						
						cand = cands.get(j);
						
						isFlipped = false;
						
						
						for (k = outs.length - 1; k >= 0; k--) {
							
							clone = (BitSet) cand.clone();		
							
							clone.xor(outs[k]);				
							
							if (clone.equals(devs[i])) {
								isFlipped = true;
							}							
						}
						
						if (isFlipped == false) {
							cands.remove(j);
						}						
					}
				}
				
				
				
				flipCounts[caseCount] = -1;
				
				if (cands.size() > 0) {					
					for (j = cands.size()-1; j >= 0; j--) {
						cand = cands.get(j);
						flipCounts[caseCount] = (flipCounts[caseCount] < 0) ? cand.cardinality() : Math.min(flipCounts[caseCount], cand.cardinality());
					}
				}
				
				caseCount++;
			}
			
			printAns(flipCounts, f + ".out");
		}
	}
	
	private static class Puzzle {
		
		public Puzzle(String[] o, String[] d) {
			this.outlets = o;
			this.devices = d;
		}
		
		String[] outlets = null;
		String[] devices = null;		
	}
	
	private static Puzzle[] readPuzzleFile(String path) {
		
		Puzzle[] puzzles = null;
		
		try {
			
			int i = 0;
			
			BufferedReader br = FileUtil.bufferFileReader(FileUtil.openFile(path));
			
			puzzles = new Puzzle[ Integer.parseInt(br.readLine()) ];
			
			while (br.readLine() != null) {
				
				puzzles[i] = new Puzzle(
								br.readLine().split(" "),
								br.readLine().split(" ")
							 );
				i++;
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
	
	private static void printAns(int[] flipCounts, String path) {
		
		if (flipCounts == null) return;
		
		try {
			int i, c;
			
			String line;
			
			BufferedWriter bw = FileUtil.bufferFileWriter(FileUtil.openFile(path));
			
			for (i = 0; i < flipCounts.length; i++) {
				
				c = flipCounts[i];				
				line = (c >= 0) ? "Case #%d: %d" : "Case #%d: NOT POSSIBLE";	
				
				bw.write(String.format(line, i+1, c));
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
	
	private static BitSet[] toBitSets(String[] bitsList) {
		
		int i, 
			j,
			bitLen = bitsList[0].length();
		
		BitSet b;
		
		BitSet[] bs = new BitSet[bitsList.length];
		
		
		i = 0;
		for (String bits : bitsList) {
			
			b = new BitSet(bitLen);
			
			for (j = 0; j < bitLen; j++) {				
				if (bits.substring(j, j+1).equals("1")) {
					b.set(bitLen - j - 1);
				}
			}
			
			bs[i] = b;
						
			i++;
		}		
		
		return bs;
	}
}
