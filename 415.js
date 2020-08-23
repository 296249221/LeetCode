/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var carry = 0;
    var num3 = 0;
    result = [];
    while (num1.length < num2.length) {
        num1 = '0' + num1;  
    }
    while (num1.length > num2.length) {
        num2 = '0' + num2;
    }
    var arr1 = num1.split('');
    var arr2 = num2.split('');
    for (var i = arr1.length; i > 0; i--) {
        num3 = Number(arr1[i - 1]) + Number(arr2[i - 1]) + carry;
        carry = num3 > 9 ? 1 : 0;
        result.unshift(String(num3).substr(-1));
    }
    result = result.join('');
    result = carry === 1 ? '1' + result : result;
    return result;
};