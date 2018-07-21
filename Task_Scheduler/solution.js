/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let maxFrequency = -1;
    let charsFrequency = new Map();
    for (let i = tasks.length - 1; i >= 0; i--) {
        let c = tasks[i];
        let freq = charsFrequency.get(c) || 0;
        freq++;
        charsFrequency.set(c, freq);
        if (maxFrequency < freq) maxFrequency = freq;
    }
    
    let maxFrequentCharsCount = 0;
    charsFrequency.forEach(freq => {
        if (freq == maxFrequency) maxFrequentCharsCount++;
    });
    
    return Math.max(tasks.length, (maxFrequency-1) * (n+1) + maxFrequentCharsCount);
};
