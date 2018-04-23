/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
    let possibles = [];
    for (let i = 0; i < input.length; ++i) {
        let chr = input[i];
        if (chr == "+" || chr == "-" || chr == "*") {
            let leftStr = input.substring(0, i);
            let rigthStr = input.substring(i + 1);
            let lefts = leftStr ? diffWaysToCompute(leftStr) : null;
            let rights = rigthStr ? diffWaysToCompute(rigthStr) : null;
            if (lefts && rights) {
                lefts.forEach(l => {
                    rights.forEach(r => possibles.push(compute(l, r, chr)));
                });   
            }
        }
    }
    if (possibles.length == 0) possibles.push(parseInt(input));
    return possibles;
};

function compute(l, r, op) {
    switch (op) {
        case "+": return l + r;
        case "-": return l - r;
        case "*": return l * r;
    }
}
