class MinStack {
    stack: number[];
    min: number | null;

    constructor() {
        this.stack = [];
        this.min = null;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if (this.stack.length == 0)
            this.min = val;
        else if (this.min >= val)
            this.min = val;
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop(): void {
        if (this.min == this.stack.pop()) {
            this.min = this.stack[0];
            for (const val of this.stack) {
                if (this.min > val){
                    this.min = val
                }
            }
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length -1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min
    }
}
