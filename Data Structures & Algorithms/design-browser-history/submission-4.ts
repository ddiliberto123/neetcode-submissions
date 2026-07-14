class ListNode {
    val: string;
    next: ListNode | null;
    prev: ListNode | null;
    constructor(val: string) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class BrowserHistory {
    node: ListNode
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.node = new ListNode(homepage);
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        const newNode = new ListNode(url);
        newNode.prev = this.node;
        this.node.next = newNode;
        this.node = newNode;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        while (this.node.prev != null && steps > 0) {
            this.node = this.node.prev;
            steps--;
        }
        return this.node.val
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        while (this.node.next != null && steps > 0) {
            this.node = this.node.next;
            steps--;
        }
        return this.node.val;
    }
}
