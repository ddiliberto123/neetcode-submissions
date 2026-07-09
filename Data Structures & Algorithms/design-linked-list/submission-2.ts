class ListNode {
    val: number;
    next: ListNode | null;
    prev: ListNode | null;
    constructor(val: number = 0, next: ListNode | null = null, prev: ListNode | null = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class MyLinkedList {
    head: ListNode | null;
    tail: ListNode | null;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if (index < 0 || index >= this.length) return -1;
        let current = this.head;
        while (index > 0) {
            current = current.next;
            index--;
        }
        return current.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val: number): void {
        const newNode = new ListNode(val, this.head);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val: number): void {
        const newNode = new ListNode(val, null, this.tail);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index: number, val: number): void {
        if (index > this.length) 
            return;
        if (index <= 0) 
            return this.addAtHead(val);
        if (index == this.length) 
            return this.addAtTail(val);

        let current = this.head;
        while (index > 0) {
            current = current.next;
            index--;
        }
        const newNode = new ListNode(val, current, current.prev);
        current.prev.next = newNode;
        current.prev = newNode;
        this.length++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.length) return;

        let current = this.head;
        while (index > 0) {
            current = current.next;
            index--;
        }

        if (current.prev) 
            current.prev.next = current.next;
        else 
            this.head = current.next;

        if (current.next) 
            current.next.prev = current.prev;
        else 
            this.tail = current.prev;

        this.length--;
    }
}
