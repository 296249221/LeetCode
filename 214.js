/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    let head = '';
    for (let i = 0; i < s.length; i++) {
        if (s[0] === s[s.length - 1 - i] && validPalindrome(s.substr(0, s.length - i))) {
            return head + s;
        } else {
            head += s[s.length - 1 - i];
        }
    }
    return head + s;
};

var validPalindrome = function(s) {
    for (let i = Math.floor(s.length / 2); i < s.length; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
};
