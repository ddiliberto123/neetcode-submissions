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
    temp: ListNode;
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
            this.temp = new ListNode(head.val);
            this.temp.next = this.head;
            this.head = this.temp;
        }
        return this.head;
    }
}
