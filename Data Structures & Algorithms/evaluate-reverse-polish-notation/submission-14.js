class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

        let stack = []

        for(let char of tokens){
            
            if(char === '+'){
                let opr1 = stack.pop()
                let opr2 = stack.pop()
                stack.push(opr1 + opr2)
            } else if(char === '-'){
              let opr1 = stack.pop()
              let opr2 = stack.pop()
              stack.push(opr2 - opr1)
            } else if(char === "*"){
                stack.push(stack.pop() * stack.pop())
            } else if(char === '/') {
                let opr1 = stack.pop()
                let opr2 = stack.pop()

                stack.push(Math.trunc(opr2 / opr1))

            } else {
                stack.push(parseInt(char))
            }
        }

        return stack.pop()

    }
}
