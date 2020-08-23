/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';
    if (strs.length === 1) return strs[0];
    let result = '';
    for (let i of strs[0]) {
        if (!i) return '';
        result += i[0];
        i = i.substr(1) + '*';
        for (let j = 1; j < strs.length; j++) {
            if (!strs[j].startsWith(result)) {
                return result.substr(0, result.length - 1);
            }
        }
    }
    return result;
};