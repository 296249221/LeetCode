/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m);
    if (m === 0) {
        nums1.splice(m, n, ...nums2);
    } else {
        for (let i = 0; i < n; i++) {
            if (nums2[i] <= nums1[0]) {
                nums1.unshift(nums2[i]);
                continue;
            }
            if (nums2[i] >= nums1[nums1.length - 1]) {
                nums1.push(...nums2.slice(i));
                break;
            }
            for (let j = 1; j < nums1.length; j++) {
                if (nums2[i] <= nums1[j]) {
                    nums1.splice(j, 0, nums2[i]);
                    break;
                }
            }
        }
    }
};