class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let set: Set<number> = new Set();
        for (const i of nums) {
            set.add(i);
        }
        return nums.length != set.size
    }
}
