/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    head: ListNode | null;
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        if (head == null) {
            return null;
        }
        this.head = new ListNode(head.val)
        while (head.next != null) {
            head = head.next;
            const temp = new ListNode(head.val);
            temp.next = this.head;
            this.head = temp;
        }
        return this.head;
    }
}
