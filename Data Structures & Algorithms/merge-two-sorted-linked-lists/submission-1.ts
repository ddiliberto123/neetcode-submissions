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
        if (list1 == null) {
            return list2;
        } else if (list2 == null) {
            return list1;
        } else if (list1.val >= list2.val) {
            this.head = new ListNode(list2.val);
            this.tail = this.head;
            if (list2.next == null) {
                this.tail.next = list1;
                return this.head;
            }
            list2 = list2.next;
        } else if (list1.val < list2.val) {
            this.head = new ListNode(list1.val);
            this.tail = this.head;
            if (list1.next == null) {
                this.tail.next = list2;
                return this.head;
            }
            list1 = list1.next
        }
        // console.log(list1);
        while (list1 != null && list2 != null) {
            if (list1.val >= list2.val) {
                this.tail.next = new ListNode(list2.val);
                this.tail = this.tail.next;
                if (list2.next == null) {
                    this.tail.next = list1;
                    return this.head;
                }
                list2 = list2.next;
            } else {
                this.tail.next = new ListNode(list1.val);
                this.tail = this.tail.next;
                if (list1.next == null) {
                    this.tail.next = list2;
                    return this.head;
                }
                list1 = list1.next;
            }
        }
    }
}
