/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.split('');
    var arr = [];
    for (let i = 0; i < s.length; i++) {
        s[i] = s[i].toLowerCase();
        if ((s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122) || (s[i].charCodeAt() >= 48 && s[i].charCodeAt() <= 57)) 
            arr.push(s[i]);
    }
    for (let j = 0; j < Math.floor(arr.length); j++) {
        if (arr[j] !== arr[arr.length - 1 - j]) {
            return false;
        }
    }
    return true;
};