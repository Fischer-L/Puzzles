/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if (intervals.length <= 0) return [];
    return mergeBySorting(intervals);
};

var mergeBySorting = function(intervals) {
    intervals.sort((a, b) => {
        let cmp = a.start - b.start;
        return cmp ? cmp : a.end - b.end;
    });
    let merged = [intervals[0]];
    for (let i = 1; i < intervals.length; ++i) {
        let child = intervals[i];
        let parent = merged[merged.length - 1];
        if (isOverlapped(parent, child)) {
            if (parent.end < child.end) {
                parent.end = child.end;
                merged[merged.length - 1] = parent;
            }
        } else {
            merged.push(child);
        }
    }
    return merged;
}

var isOverlapped = function(a, b) {
    let overlapped = (a.start <= b.start && b.start <= a.end) || (a.start <= b.end && b.end <= a.end);
    if (!overlapped) {
        overlapped = (b.start <= a.start && a.start <= b.end) || (b.start <= a.end && a.end <= b.end);
    }
    return overlapped;
}
