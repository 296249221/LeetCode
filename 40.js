/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = [];
    let end = [];
    let map = new Map();
    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i] === target) {
            result.push([candidates[i]]);
        } else if (candidates[i] < target) {
            end = combinationSum2(candidates.slice(i + 1), target - candidates[i]);
            if (end.length) {
                for (let j = 0; j < end.length; j++) {
                    result.push([candidates[i], ...end[j]]);
                }
            }
        }
    }
    for (let k = 0; k < result.length; k++) {
        result[k] = result[k].sort((a, b) => a - b);
        map.set(JSON.stringify(result[k]), result[k]);
    }
    return [...map.values()];
};