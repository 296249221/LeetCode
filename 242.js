/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    var dic = {};
    for (let i = 0; i < s.length; i++) {
        if (dic[s[i]]) {
            dic[s[i]] += 1;
        } else {
            dic[s[i]] = 1;
        }
    }
    for (let j = 0; j < t.length; j++) {
        if (dic[t[j]]) {
            dic[t[j]] -= 1;
        } else {
            return false;
        }
    }
    return true;
};