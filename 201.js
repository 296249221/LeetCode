/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    if (m === n) return m;
    let mBit = parseInt(m, 10).toString(2);
    let nBit = parseInt(n, 10).toString(2);
    if (mBit.length < nBit.length) return 0;
    let result = '';
    let flag = true;
    for (let i = 0; i < mBit.length; i++) {
        if (flag && mBit.charAt(i) === nBit.charAt(i)) {
            result += mBit.charAt(i);
        } else {
            flag = false;
            result += '0';
        }
    }
    return parseInt(result, 2);
};