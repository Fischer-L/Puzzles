/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let chars = [];
    s = s.toLowerCase();
    for (let i = 0; i < s.length; ++i) {
        let c = s[i];
        if (isAlphanumeric(c)) chars.push(c);
    }
    for (let i = 0, j = chars.length - 1; i <= j; ++i, --j) {
        if (chars[i] != chars[j]) return false;
    }
    return true;
};

var isAlphanumeric = function(c) {
    let ascii = c.charCodeAt(0);
    return (48 <= ascii && ascii <= 57) || (97 <= ascii && ascii <= 122);
}
