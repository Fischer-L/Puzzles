/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    return findWays(sanitzie(s));
};

var ways = {};

var sanitzie = function (s) {
    let cleanS = [];
    for (let i = 0; i < s.length; ++i) {
        let c = s[i];
        if (0 < c && c <= 9) {
            cleanS.push(c);
        } else if (c == 0 && i - 1 >= 0) {
            c = s[i-1];
            if (c == 1 || c == 2) {
                cleanS.push("0");
            } else {
                return "";
            }
        } else {
            return "";
        }
    }
    return cleanS.join("");
}

var findWays = function(s) {
    if (ways[s]) return ways[s];
    
    let nums = 0;
    const L = s.length;
    if (L == 0) {
        return 0;
    } else if (L == 1) {
        nums = s[0] == 0 ? 0 : 1;
    } else if (L == 2) {
        nums = 1;
        let c0 = s[0];
        if (c0 == 0) {
            nums = 0;
        } else if (c0 <= 2) {
            let c1 = s[1];
            if (c0 == 1) {
                nums = c1 == 0 ? 1 : 2;
            } else if (c0 == 2) {
                nums = c1 == 0 || c1 >= 7 ? 1 : 2;
            }
        }
    } else {
        let c0 = s[0];
        if (c0 <= 2) {
            let c1 = s[1];
            if (c0 == 1) {
                if (c1 == 0) {
                    nums += numDecodings(s.substr(2));
                } else {
                    nums += numDecodings(s.substr(1)) + numDecodings(s.substr(2));
                }
            } else if (c0 == 2) {
                if (c1 == 0) {
                    nums += numDecodings(s.substr(2));
                } else if (c1 >= 7) {
                    nums += numDecodings(s.substr(1))
                } else {
                    nums += numDecodings(s.substr(1)) + numDecodings(s.substr(2));
                }
            } 
        } else {
            nums += numDecodings(s.substr(1));
        }
    }
    
    ways[s] = nums;
    return nums;
};
