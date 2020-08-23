/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var index = -1;
    for (var i = nums.length; i > 0; i--) {
        index = nums.indexOf(target - nums[i]);
        if (index > -1 && index !== i) {
            return [index, i];
        } 
    }
};