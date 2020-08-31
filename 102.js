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
var levelOrder = function(root) {
    if (!root) return [];
    root.layer = 0;
    let queue = [root];
    let result = [];
    while(queue.length) {
        let node = queue.shift();
        if (!result[node.layer]) result[node.layer] = [];
        result[node.layer].push(node.val);
        if (node.left) {
            node.left.layer = node.layer + 1;
            queue.push(node.left);
        }
        if (node.right) {
            node.right.layer = node.layer + 1;
            queue.push(node.right);
        }
    }
    return result;
};