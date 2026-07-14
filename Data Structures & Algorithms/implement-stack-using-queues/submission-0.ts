class MyStack {
    stack: number[]

    constructor() {
        this.stack = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        this.stack.unshift(x)
    }

    /**
     * @return {number}
     */
    pop(): number {
        return this.stack.shift()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[0];
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        return !this.stack.length;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
