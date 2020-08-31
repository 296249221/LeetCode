/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums.length) return null;
    return traversal(nums);
};

var traversal = function (nums) {
    if (!nums.length) return null;
    let index = Math.floor(nums.length / 2);
    let treeNode = new TreeNode();
    treeNode.val = nums[index];
    treeNode.left = traversal(nums.splice(0, index));
    treeNode.right = traversal(nums.slice(1));
    return treeNode;
}