/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.trim();
    var result = '';
    if (!str.length) return 0;
    if (str[0].charCodeAt() === 43 || str[0].charCodeAt() === 45 || (str[0].charCodeAt() >= 48 && str[0].charCodeAt() <= 57)) {
        result += str[0];
        for (let i = 1; i < str.length; i++) {
            if (str[i].charCodeAt() >= 48 && str[i].charCodeAt() <= 57) {
                result += str[i];
            } else {
                break;
            }
        }
        if (result === '+' || result === '-') {
            return 0;
        }
        if (result[0].charCodeAt() === 45) {
            return Number(result) > -2147483648 ? Number(result) : -2147483648;
        } else {
            return Number(result) < 2147483647? Number(result) : 2147483647;
        }
    } else {
        return 0;
    }
};