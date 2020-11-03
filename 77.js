/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if (k > n) return [];
    if (k === 0) return [[]];
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    if (n === k) return [arr];
    return generateCombine([], arr, k);
};

/**
 * @param {number[][]} front 
 * @param {number[][]} arr 
 * @param {number} k 
 */
var generateCombine = function(front, arr, k) {
    let result = [];
    if (k === 1) {
        for (let i = 0; i < arr.length; i++) {
            result.push([...front, arr[i]]);
        }
    } else {
        for (let i = 0; i < arr.length - k + 1; i++) {
            result.push(...generateCombine([...front, arr[i]], arr.slice(i + 1), k - 1));
        }
    }
    return result;
};