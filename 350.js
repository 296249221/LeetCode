/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var result = [];
    var index = -1;
    for (var i = 0; i < nums1.length; i++) {
        index = nums2.indexOf(nums1[i]);
        if (index > -1) {
            nums2.splice(index, 1);
            result.push(nums1[i]);
        }
    }
    return result;
};