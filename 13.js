/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let dic = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    if (s.length === 1) return dic[s];
    let result = 0;
    for (let i = 1; i <= s.length; i++) {
        if (dic[s[i - 1]] < dic[s[i]]) {
            result += dic[s[i]] - dic[s[i - 1]];
            i++;
        } else {
            result += dic[s[i - 1]];
        }
    }
    return result;
};