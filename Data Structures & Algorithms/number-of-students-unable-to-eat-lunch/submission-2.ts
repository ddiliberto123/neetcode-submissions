class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        let count = 0;
        while (students.length > 0 && sandwiches.length > 0) {
            if (sandwiches[0] == students[0]) {
                sandwiches.shift();
                students.shift()
                count = 0;
            } else {
                if (count == sandwiches.length) {
                    break;
                }
                count++;
                students.push(students.shift())
            }
        }
        return students.length
    }
}
