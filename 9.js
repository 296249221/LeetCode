/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let stringX = String(x);
    let left = stringX.substr(0, Math.floor(stringX.length / 2));
    let right = stringX.substr(Math.ceil(stringX.length / 2)).split('').reverse().join('');
    return left === right;
};