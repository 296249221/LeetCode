/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var count = 0;
    var i = 0;
    while (i < nums.length) {
        if (nums[i] === 0) {
            count++;
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
    while (count > 0) {
        nums.push(0);
        count--;
    }
};