/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(str, t) {
    let tMap = {};
    [ ...t ].forEach(c => {
        if (!tMap[c]) {
            tMap[c] = 1;
        } else {
            tMap[c]++;            
        }
    });
    
    let minWindowStart = -1;
    let numCharsMising = t.length;
    let minWindowLength = str.length + 1;
    let s = 0, e = 0;
    while (e < str.length) {
        let c = str[e];
        if (tMap[c] !== undefined) {
            tMap[c]--;
            if (tMap[c] >= 0) numCharsMising--;
        }
        while (numCharsMising == 0) {
            if (e - s + 1 < minWindowLength) {
                minWindowStart = s;
                minWindowLength = e - s + 1;
            }
            c = str[s];
            if (tMap[c] !== undefined) {
                tMap[c]++;
                if (tMap[c] > 0) numCharsMising++;
            }
            s++;
        }
        e++;
    }
    return minWindowStart == -1 ? "" : str.substr(minWindowStart, minWindowLength);
};
