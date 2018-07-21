class Solution {
    public int leastInterval(char[] tasks, int n) {
        int maxFrequency = -1;
        int[] charsFrequency = new int[26];
        for (int i = tasks.length - 1; i >= 0; i--) {
            int idx = tasks[i] - 'A';
            charsFrequency[idx]++;
            if (maxFrequency < charsFrequency[idx]) {
                maxFrequency = charsFrequency[idx];
            }
        }
        
        int maxFrequentCharsCount = 0;
        for (int i = 0; i < 26; i++) {
            if (charsFrequency[i] == maxFrequency) {
                maxFrequentCharsCount++;
            }
        }
        
        return Math.max(tasks.length, (maxFrequency-1) * (n+1) + maxFrequentCharsCount);
    }
}
