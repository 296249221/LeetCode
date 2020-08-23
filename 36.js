/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let count = 0;
    let nums = [];
    let nums1 = [];
    let nums2 = [];
    let nums3 = [];
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            nums.push(board[j][i]);
        }
        board.push(nums);
        nums = [];
        nums1 = [...nums1, ...board[i].slice(0, 3)];
        nums2 = [...nums2, ...board[i].slice(3, 6)];
        nums3 = [...nums3, ...board[i].slice(6)];
        if (i === 2 || i === 5 || i == 8) {
            board.push(nums1, nums2, nums3);
            nums1 = nums2 = nums3 = [];
        }
    }
    for (let k = 0; k < board.length; k++) {
        if (validSingle(board[k])) {
            count++;
        }
    }
    if (count === board.length) {
        return true;
    } else {
        return false;
    }
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validSingle = function(nums) {
    let arr = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== '.') {
            if (arr[nums[i]]) {
                return false;
            } else {
                arr[nums[i]] = true;
            }
        }
    }
    return true;
}