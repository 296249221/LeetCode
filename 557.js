/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = '';
    let arr = s.split(' ');
    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i].split('').reverse().join('') + ' ';
    }
    result = result.trim();
    return result;
};