/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var len = nums.length;
    var param;
    for (var i = 1; i < len; i++) {
        if (nums.indexOf(nums[i]) < i) {
            param = nums[i];
            nums.splice(i, 1);
            nums.push(param);
            i--;
            len--;
        }
    }
    return len;
};