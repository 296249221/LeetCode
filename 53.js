/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length < 2) return nums[0];
    let result = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (result[i - 1] >= 0 && result[i - 1] + nums[i] >= 0) {
            result[i] = result[i - 1] + nums[i];
        } else {
            result[i] = nums[i];
        }
    }
    return Math.max(...result);
};