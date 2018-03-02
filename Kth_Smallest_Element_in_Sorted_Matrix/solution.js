/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let arrs = Array.from(matrix);
    let merge = [];
    while (arrs.length) {
        let a = arrs.pop();
        let b = arrs.pop();
        merge.push(mergeSorted(a, b));
        if (!arrs.length && merge.length > 1) {
            arrs = merge;
            merge = [];
        }
    }
    --k;
    merge = merge[0];
    return merge && merge.length > k ? merge[k] : 0;
};

var mergeSorted = function (a, b) {
    if (a && !b) return a;
    if (!a && b) return b;
    let A = a.length;
    let B = b.length;
    let i = 0;
    let j = 0;
    let merge = [];
    while (i < A && j < B) {
        let av = a[i];
        let bv = b[j];
        if (av == bv) {
            merge.push(av, bv);
            ++i; ++j;
        } else if (av < bv) {
            merge.push(av);
            ++i;
        } else if (av > bv) {
            merge.push(bv);
            ++j;
        }
    }
    while (i < A) {
        merge.push(a[i++]);
    }
    while (j < B) {
        merge.push(b[j++]);
    }
    return merge;
};

