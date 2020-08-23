/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) return true;
    if ((!p && q) || (p && !q)) return false;
    let pQueue = [p];
    let qQueue = [q];
    while(pQueue.length && qQueue.length) {
        pTree = pQueue.shift();
        qTree = qQueue.shift();
        if (pTree.val === qTree.val) {
            if ((pTree.left && !qTree.left) || (!pTree.left && qTree.left)) return false;
            if ((pTree.right && !qTree.right) || (!pTree.right && qTree.right)) return false;
            if (pTree.left && qTree.left) {
                pQueue.push(pTree.left);
                qQueue.push(qTree.left);
            }
            if (pTree.right && qTree.right) {
                pQueue.push(pTree.right);
                qQueue.push(qTree.right);
            }
        } else 
            return false;
    }
    if (pQueue.length === qQueue.length)
        return true;
    else
        return false;
};