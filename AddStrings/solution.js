/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let ans = "";
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    while (i >= 0 || j >= 0) {
        carry += i >= 0 ? parseInt(num1[i--]) : 0;
        carry += j >= 0 ? parseInt(num2[j--]) : 0;
        ans = (carry % 10) + ans;
        carry = carry >= 10 ? 1 : 0;
    }
    if (carry > 0) ans = "1" + ans;
    return ans;
};
