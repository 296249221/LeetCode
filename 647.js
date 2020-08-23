/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        count++;
        for (let j = 1; j < Math.min(i + 1, s.length - i); j++) {
            if (s[i - j] === s[i + j]) {
                count++;
            } else {
                break;
            }
        }
        for (let k = 1; k < Math.min(i + 1, s.length - i + 1); k++) {
            if (s[i - k] === s[i + k - 1]) {
                count++;
            } else {
                break;
            }
        }
    }
    return count;
};