class MinStack {
    stack: number[][];
    length: number;

    constructor() {
        this.stack = [];
        this.length = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if (this.length == 0) {
            this.stack.push([val, val])
        }
        else {
            const prevMin = this.stack[this.length - 1][1];
            this.stack.push([val, val < prevMin ? val : prevMin])
        }
        this.length++;
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
        this.length--;
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.length - 1][0];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.stack[this.length - 1][1];
    }
}
