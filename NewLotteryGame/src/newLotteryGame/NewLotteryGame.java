package newLotteryGame;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.UnsupportedEncodingException;

public class NewLotteryGame {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		
		String[] path = {
			"./B-small-practice", "./B-large-practice"
		};
		
		int i;
		
		long[] ans;
		
		Puzzle[] ps;
		
		for (String f : path) {
			
			ps = readPuzzleFile(f + ".in");
			
			ans = new long[ps.length];
			
			for (i = 0; i < ps.length; i++) {
				ans[i] = calLottery(ps[i]);
			}
			
			printAns(ans, f + ".out");
		}
	}
	
	private static class Puzzle {
		
		public Puzzle(long A, long B, long K) {
			this.A = A;
			this.B = B;
			this.K = K;
		}
		
		public long A = -1;
		public long B = -1;
		public long K = -1;		
	}
	
	private static Puzzle[] readPuzzleFile(String path) {
		
		Puzzle[] ps = null;
		
		try {
			
			BufferedReader br = FileUtil.bufferFileReader(FileUtil.openFile(path));
			
			ps = new Puzzle[Integer.parseInt(br.readLine())];
			
			int i = 0;
			String line;
			String[] tmp;			
			
			while ((line = br.readLine()) != null) {				
				tmp = line.split(" ");
				ps[i] = new Puzzle(Long.parseLong(tmp[0]), Long.parseLong(tmp[1]), Long.parseLong(tmp[2]));
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
		
		return ps;
	}
	
	private static void printAns(long[] ans, String path) {
		
		try {
			
			BufferedWriter bw = FileUtil.bufferFileWriter(FileUtil.openFile(path));
			
			String line = "Case #%d: %d";
			
			for (int i = 0; i < ans.length; i++) {				
				bw.write(String.format(line, i+1, ans[i]));
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
	
	private static long calLottery(Puzzle p) {
		
		long pairNum = 0,
			 mA = (p.A < p.K) ? p.A : p.K,
			 mB = (p.B < p.K) ? p.B : p.K;
		
		pairNum = mA * mB + mA * (p.B - mB) + mB * (p.A - mA);
		
		mA = p.A - mA;
		mB = p.B - mB;		
		if (mA > 0 && mB > 0) {
			
			long i, j,
				 lowerTop, upperTop;
			
			if (mA >= mB) {

				upperTop = p.A;
				lowerTop = p.B;
				
			} else {

				upperTop = p.B;
				lowerTop = p.A;	
				
			}
			
			for (i = p.K; i < lowerTop; i++) {
				
				for (j = i; j < lowerTop; j++) {
					
					if ((i & j) < p.K) {
						pairNum += 2;
						if (i == j) pairNum -= 1;
					}
				}				
			}
			
			for (i = lowerTop; i < upperTop; i++) {
				
				for (j = p.K; j < lowerTop; j++) {
					
					if ((i & j) < p.K) {
						pairNum += 1;
					}					
				}				
			}
		}
		
		return pairNum;
	}
}
