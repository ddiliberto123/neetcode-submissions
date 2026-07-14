class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        const arr = [0, 0]
        for (const student of students) {
            arr[student]++;
        }
        for (const sandwich of sandwiches) {
            if (arr[sandwich] == 0) {
                break;
            }
            arr[sandwich]--;
        }
        
        return arr[0] + arr[1]
    }
}
