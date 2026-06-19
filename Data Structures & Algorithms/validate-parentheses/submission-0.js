class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

let stack = []
let map = {
    '(' : ')',
    '[':  ']',
    '{':  '}',
}

for (let c of s){
    if(map[c]){
        stack.push(map[c])
    } else {
        if(stack.pop() !== c ) return false
    }
}

    return stack.length === 0
    }
}