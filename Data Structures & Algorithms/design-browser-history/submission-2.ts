class BrowserHistory {
    stack: string[];
    index: number;
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.stack = [];
        this.stack.push(homepage)
        this.index = 0;
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        this.stack.splice(this.index + 1)
        this.stack.push(url);
        this.index = this.stack.length - 1;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        const back = this.index - steps;
        this.index = back > 0 ? back : 0;
        return this.stack[this.index];
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        this.index = this.index + steps < (this.stack.length - 1) ? this.index + steps : this.stack.length - 1;
        return this.stack[this.index]
    }
}
