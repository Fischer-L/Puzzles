class Solution {
    public List<Integer> topKFrequent(int[] nums, int k) {
        HashMap<Integer, Integer> freqMap = new  HashMap<Integer, Integer>();
        for (int key : nums) {
            int freq = freqMap.getOrDefault(key, 0);
            freqMap.put(key, ++freq);
        }
        
        ArrayList<List<Integer>> freqBucket = new ArrayList<List<Integer>>();
        for (int i = nums.length; i >= 0; i--) freqBucket.add(null);
        for (Map.Entry<Integer, Integer> entry : freqMap.entrySet()) {
            int freq = entry.getValue();
            List<Integer> keys = freqBucket.get(freq);
            if (keys == null) {
                keys = new ArrayList<Integer>();
                freqBucket.set(freq, keys);
            }
            keys.add(entry.getKey());
        }
        
        int i = freqBucket.size() - 1;
        ArrayList<Integer> ans = new ArrayList<Integer>();
        while (k > 0) {
            List<Integer> keys = freqBucket.get(i);
            if(keys != null) {
                ans.addAll(keys);
                if (ans.size() == k) k = 0;
            }
            i--;
        }
        return ans;
    }
}
