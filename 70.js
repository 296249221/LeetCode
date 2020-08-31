/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n < 3) return n;
    fn = [1, 2];
    for (let i = 2; i < n; i++) {
        fn[i] = fn[i - 1] + fn[i - 2];
    }
    return fn.pop();
};