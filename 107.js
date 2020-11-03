/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (!root) return [];
    return generate(root, 0, []).reverse();
};

/**
 * @param {TreeNode} root 
 * @param {number} level 
 * @param {number[][]} result 
 */
var generate = function(root, level, result) {
    if (!result[level]) result[level] = [];
    result[level].push(root.val);
    if (root.left) generate(root.left, level + 1, result);
    if (root.right) generate(root.right, level + 1, result);
    return result;
};