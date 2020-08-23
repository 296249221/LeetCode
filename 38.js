/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let result = '1';
    for (let i = 1; i < n; i++) {
        result = description(result);
    }
    return result;
};

var description = function(str) {
    let result = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            result = result + count + str[i];
            count = 1;
        }
    }
    return result;
};