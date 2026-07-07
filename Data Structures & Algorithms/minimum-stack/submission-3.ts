class MinStack {
    stack: number[];
    length: number;
    min: number | null;

    constructor() {
        this.stack = [];
        this.length = 0;
        this.min = null;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if (this.length == 0) this.min = val;
        else if (this.min >= val) this.min = val;
        this.stack.push(val);
        this.length++;
    }

    /**
     * @return {void}
     */
    pop(): void {
        if (this.min == this.stack.pop()) {
            this.min = this.stack[0];
            for (const val of this.stack) {
                if (this.min > val) {
                    this.min = val;
                }
            }
        }
        this.length--;
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min;
    }
}
