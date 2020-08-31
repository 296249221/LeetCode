/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let dic = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    }
    let result = [];
    let arr = [];
    for (let i = 0; i < digits.length; i++) {
        if (i === 0) {
            result = dic[digits[i]].split('');
            continue;
        }
        arr = [...result];
        result = [];
        for (let j = 0; j < dic[digits[i]].length; j++) {
            result[j] = [...arr];
            result[j] = result[j].map(item => item + dic[digits[i]][j]);
        }
        result = result.flat(Infinity);
    }
    return result;
};