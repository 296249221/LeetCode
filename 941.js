/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    if (A.length < 3) return false;
    let flag = 0;
    for (let i = 1; i < A.length; i++) {
        if (A[i] === A[i - 1]) return false;
        if (flag) {
            if (A[i] > A[i - 1]) {
                return false;
            }
        } else {
            if (A[i] < A[i - 1]) {
                flag = i - 1;
                if (flag === 0) return false;
            }
        }
    }
    return flag !== 0 && flag !== A.length - 1;
};