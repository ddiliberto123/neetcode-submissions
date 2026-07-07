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
    tail: ListNode;
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        this.head = new ListNode()
        this.tail = this.head
        while (list1 && list2) {
            if (list1.val >= list2.val) {
                this.tail.next = list2;
                list2 = list2.next;
            } else {
                this.tail.next = list1;
                list1 = list1.next;
            }
            this.tail = this.tail.next;
        }

        if (list1)
            this.tail.next = list1;
        else if (list2)
            this.tail.next = list2;

        return this.head.next;
    }
}
