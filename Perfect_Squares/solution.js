/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let squares = [];
    let i = 1;
    while (1) {
        let s = i ** 2;
        if (s > n) {
            break;
        }
        squares.push(s);
        ++i;
    }
    let a = calLeastSquares(n, squares).length;
    return a;
};

var leastSquares = {};

var calLeastSquares = function (n, squares) {
    if (leastSquares[n]) return leastSquares[n];
    
    let least = null;
    let rest = -1;
    let must = -1;
    for (let i = squares.length - 1; i >= 0; --i) {
        must = squares[i];
        let combs = [must];
        rest = n - must;
        if (rest > 0) {
            combs = combs.concat(calLeastSquares(rest, cutSquares(rest, squares)));
        }
        if (!least || combs.length < least.length) {
            least = combs;
            if (least.length == 1) break;
        }
    }
    leastSquares[n] = least;
    return least;
}

var cutSquares = function (n, squares) {
    for (let i = 0; i < squares.length; ++i) {
        if (squares[i] > n) return squares.slice(0, i);
    }
    return squares;
}
