/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.replace(s.charAt(i), '').indexOf(s.charAt(i)) === -1) {
            return i;
        }
    }
    return -1;
};