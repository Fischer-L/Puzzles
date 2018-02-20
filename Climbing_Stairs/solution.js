/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 0) return 1;
    
    let currentStair = 0;
    let previousStair = 1;
    let previousStair2 = 0;
    while (n--) {
        currentStair = previousStair + previousStair2;
        previousStair2 = previousStair;
        previousStair = currentStair;
    }
    return currentStair;
};

var steps = {};
