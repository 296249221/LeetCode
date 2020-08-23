/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (nums.length) {
        for (var i = 0; i < nums.length - 1; i++) {
            if (nums.indexOf(nums[nums.length - i - 1]) < nums.length - i - 1) {
                return true;
            }
        }
        return false;
    } else
        return false;
};