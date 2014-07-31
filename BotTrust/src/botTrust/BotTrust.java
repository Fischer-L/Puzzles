package botTrust;

import java.io.BufferedReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;

public class BotTrust {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		
		ArrayList<Integer> ans;
		ArrayList<ArrayList<BtnStop>> puzzles;
		String[] path = {
			"./A-small-practice.in", "./A-large-practice.in"				
		};
		
		for (int i = 0; i < path.length; i++) {
			puzzles = BotTrust.readPuzzleFile(path[i]);		
			ans = calculate(puzzles);
			printAnswers(ans, path[i]);
		}
		
	}

	private static final String BOT_TYPE_BLUE = "B";
	
	private static final String BOT_TYPE_ORANGE = "O";
	
	private static class Bot {
		
		public Bot(String botType) {
			this.botType = botType;
		}
		
		String botType;

		int pos = 1;
		
		int passedTimeTillLastMove = 0;
	}	
	
	private static class BtnStop {
		
		public BtnStop(int pos, String botType) {
			this.pos = pos;
			this.botType = botType;
		}		
		
		int pos;
		String botType;		
	}
	
	private static ArrayList<ArrayList<BtnStop>> readPuzzleFile(String path) {
		
		BufferedReader br;
		
		try {
			br = FileUtil.bufferFileReader(FileUtil.openFile(path));			
		} catch (IOException e) {
			e.printStackTrace();
			return null;
		}

		int i;
		String line;
		String[] splits;
		
		ArrayList<BtnStop> btnSequnce;
		ArrayList<ArrayList<BtnStop>> puzzles = new ArrayList<ArrayList<BtnStop>>();
		
		try {
			
			while ((line = br.readLine()) != null) {
				
				btnSequnce = new ArrayList<BtnStop>();
				
				splits = line.split(" ");
				
				if (splits.length > 1) {
					
					for (i = 1; i < splits.length - 1; i += 2) {
						btnSequnce.add(new BtnStop(Integer.parseInt(splits[i+1]), splits[i]));
					}
					
					if (btnSequnce.size() > 0) {
						puzzles.add(btnSequnce);
					}
				}
			}
			
			br.close();
			
		} catch (IOException e) {
			e.printStackTrace();
			return null;
		}
		
		return (puzzles.size() > 0) ? puzzles : null;
	}
	
	private static ArrayList<Integer> calculate(ArrayList<ArrayList<BtnStop>> puzzles) {
		
		int time;		
		Bot bBot;
		Bot oBot;		
		BtnStop stop;		
		Bot movingBot;		
		ArrayList<BtnStop> stops;		
		Iterator<BtnStop> stopsItr;		
		Iterator<ArrayList<BtnStop>> puzzlesItr;
		ArrayList<Integer> minTimeArray = new ArrayList<Integer>();
		
		puzzlesItr = puzzles.iterator();
		
		while (puzzlesItr.hasNext()) {
			
			time = 0;			
			stops = puzzlesItr.next();			
			stopsItr = stops.iterator();	
			bBot = new Bot(BotTrust.BOT_TYPE_BLUE);		
			oBot = new Bot(BotTrust.BOT_TYPE_ORANGE);
			
			while (stopsItr.hasNext()) {
				
				stop = stopsItr.next();				
								
				movingBot = stop.botType.equals(BotTrust.BOT_TYPE_BLUE) ? bBot : oBot;
				
				// If the time > the time which the moving bot takes from the start to the current position,
				// this means another bot takes more time, this moving bot arrives earlier and has to wait for another bot,
				// so the total time elapsed is still the current cummulative time.
				time = Math.max(time, Math.abs(stop.pos - movingBot.pos) + movingBot.passedTimeTillLastMove);
				
				// Press the button
				time += 1;
				
				// Update the bot's position to the current position
				movingBot.pos = stop.pos;
				
				// Since this move is done,
				// the bot shall move to the next position if there is one so this move is the last move for the next move.
				// The current total time elapsed becomes becomes the time passed till the last move
				movingBot.passedTimeTillLastMove = time;
			}
						
			minTimeArray.add(time);
		}
		
		return minTimeArray;
	}

	private static void printAnswers(ArrayList<Integer> ans, String title) {
		
		System.out.println(title);
		
		for (int i = 0; i < ans.size(); i++) {			
			System.out.printf("Case #%03d: %d", i, ans.get(i));
			System.out.println();
		}
	}
}
