package minimumScalarProduct;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class MinimumScalarProduct {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		
		String[] paths = {
			"./A-small-practice", "./A-large-practice"
		};

		Long min;
		int i, j, size;
		BufferedWriter bw;
		ArrayList<VectorsBucket> buckets = new ArrayList<VectorsBucket>();
		
		for (i = 0; i < paths.length; i++) {
			
			buckets.clear();
			
			readPuzzleFile(paths[i] + ".in", buckets);
			if ((size = buckets.size()) > 0) {	
					
				try {
					bw = FileUtil.bufferFileWriter(FileUtil.openFile(paths[i] + ".out"));
					
					for (j = 0; j < size; j++) {
						
						min = buckets.get(j).minScalarProduct;
						
						if (min != null) {
							bw.write(String.format("Case #%d: %d", j+1, min));
						} else {
							bw.write(String.format("Case #%d: NULL", j+1));
						}
						
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
		}
	}
	
	private static Comparator<Integer> ascendingOrder = new Comparator<Integer>() {
		@Override
		public int compare(Integer arg0, Integer arg1) {
			return arg0 - arg1;
		}		
	};
	
	private static Comparator<Integer> descendingOrder = new Comparator<Integer>() {
		@Override
		public int compare(Integer arg0, Integer arg1) {
			return arg1 - arg0;
		}		
	};
	
	private static class VectorsBucket {
		
		public VectorsBucket(ArrayList<Integer> v1, ArrayList<Integer> v2) {
			
			if (v1 != null && v2 != null && v1.size() > 0 && v1.size() == v2.size()) {	
				this.v1 = v1;
				this.v2 = v2;
				
				Collections.sort(this.v1, ascendingOrder);
				Collections.sort(this.v2, descendingOrder);
				
				if (this.minScalarProduct == null) {
					this.minScalarProduct = (long) 0;
				}
				for (int i = 0; i < v1.size(); i++) {
					this.minScalarProduct += (long) this.v1.get(i) * (long) this.v2.get(i);
				}				
			}
		}
		
		public Long minScalarProduct = null;
		public ArrayList<Integer> v1 = new ArrayList<Integer>();
		public ArrayList<Integer> v2 = new ArrayList<Integer>();		
	}
	
	private static ArrayList<Integer> strArr2IntList(String[] sa) {
		
		if (sa.length > 0) {
			
			ArrayList<Integer> intList = new ArrayList<Integer>();
			
			for (int i = 0; i < sa.length; i++) {
				intList.add(Integer.parseInt(sa[i]));				
			}
			
			return intList;
		}
		
		return null;
	}
	
	private static void readPuzzleFile(String path, ArrayList<VectorsBucket> buckets) {
				
		String line;
		BufferedReader br;
		ArrayList<Integer> v1, v2;
		
		try {
			
			br = FileUtil.bufferFileReader(FileUtil.openFile(path));	
			
			line = br.readLine(); // The 1st line is useless
			
			while ((line = br.readLine()) != null) {				
				
				v1 = v2 = null;
				
				line = br.readLine();
				if (line != null) {
					v1 = strArr2IntList(line.split(" "));
				}
				
				line = br.readLine();
				if (line != null) {
					v2 = strArr2IntList(line.split(" "));
				}
				
				if (v1 != null && v2 != null) {
					buckets.add(new VectorsBucket(v1, v2));
				}
			}
			
			br.close();
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}
	
}
