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
        for (let i = 0; i < s.length; i++) {
            const s1 = s.charAt(i);
            const t1 = t.charAt(i);
            if (map.has(s1)) {
                map.set(s1, map.get(s1) + 1)
            } else {
                map.set(s1, 1);
            } 
            if (map.has(t1)) {
                map.set(t1, map.get(t1) - 1)
            } else {
                map.set(t1, -1)
            }
        }
        console.log(map)
        for (const val of map.values()) {
            if (val != 0)
                return false
        }
        return true
    }
}
