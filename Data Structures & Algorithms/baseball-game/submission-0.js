class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];

        for (let val of operations) {
            if (val === "+") {
                let top = stack.pop();
                let newTop = top + stack[stack.length - 1];
                stack.push(top);
                stack.push(newTop);
            } else if (val === "D") {
                stack.push(2 * stack[stack.length - 1]);
            } else if (val === "C") {
                stack.pop();
            } else {
                stack.push(parseInt(val))
            }
        }

        return stack.reduce((a,b) => a + b, 0)
    }
}
