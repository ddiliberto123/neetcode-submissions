class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length)
            return false;
        let map = new Map();
        for (const letter of s) {
            if (map.get(letter)) {
                map.set(letter, map.get(letter) + 1)
            } else {
                map.set(letter, 1);
            }
        }
        for (const letter of t) {
            if (map.get(letter) == 1) {
                map.delete(letter);
            } else if (map.get(letter)) {
                map.set(letter, map.get(letter) - 1)
            } else {
                return false;
            }
        }
        if (map.size == 0) {
            return true;
        } else {
            return false
        }
    }
}
