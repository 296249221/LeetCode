/**
 * @param {number[]} nums
 * @return {boolean}
 */
var singleNumber = function(nums) {
    if (nums.length > 1) {
        nums.sort();
        if (nums[0] !== nums[1]) 
            return nums[0];
        if (nums[nums.length - 2] !== nums[nums.length - 1])
            return nums[nums.length - 1];
    } else {
        return nums[0];
    }
    for (var i = 1; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
            return nums[i];
        }
    }
};