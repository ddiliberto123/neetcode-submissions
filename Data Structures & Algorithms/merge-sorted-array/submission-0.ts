class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        for (let i = m; i < nums1.length; i++) {
            nums1[i] = nums2[i-m];
        }
        for (let j = 0; j < nums1.length; j++) {
            for (let k = 0; k < nums1.length; k++) {
                if (nums1[j] < nums1[k]) {
                    const temp = nums1[k];
                    nums1[k] = nums1[j];
                    nums1[j] = temp;
                }
            }
        }
    }
}
