class Solution {
    computed: Map<number, number> = new Map();
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        if (n <= 2)
            return n
        if (this.computed.has(n))
            return this.computed.get(n)
        const result = this.climbStairs(n-1) + this.climbStairs(n-2)
        this.computed.set(n, result);
        return result;
    }
}
