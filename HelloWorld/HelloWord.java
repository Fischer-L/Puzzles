
public class HelloWord {
	
	public static void main(String[] args) {
		HelloWord.print(100, 100);
	}
	
	private static void printOneLine(int startPos, String[] str) {
		
		int i = startPos % str.length;
		
		if (str[i] != null) {
			System.out.print(str[i]);
			str[i] = null;
			HelloWord.printOneLine(startPos+1, str);
		}
	}
	
	private static void print(int leftCount, int totalCount) {
		
		if (leftCount <= 0) return;
		
		if (totalCount < leftCount) {
			totalCount = leftCount;
		}
		
		int i = totalCount - leftCount;
		
		System.out.printf("(%03d) ", i+1);
		HelloWord.printOneLine(i, new String[] { "H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d" });
		System.out.println();
		
		HelloWord.print(leftCount-1, totalCount);		
	}
}
