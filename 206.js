/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) return head;
    let node = new ListNode(head.val);
    let preNode;
    while(head && head.next) {
        head = head.next;
        preNode = new ListNode(head.val);
        preNode.next = node;
        node = preNode;
    } 
    return node;
};