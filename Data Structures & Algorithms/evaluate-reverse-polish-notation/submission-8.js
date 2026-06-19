class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

   let stack = [];
    let res = 0;
if(tokens.length === 1) return parseInt(tokens[0]);
    for(let val of tokens){
        if( val !== '+' && val !== '-' && val !== '/' &&val !== '*' ){
            stack.push(parseInt(val))
        }
        if( val === '+' ){
             let num1 = stack.pop();
            let num2 = stack.pop();
            res = num2 + num1;
            stack.push(res)
        } else if ( val === '-'){
             let num1 = stack.pop();
            let num2 = stack.pop();
            res = num2 - num1;
            stack.push(res);
        }
        else if ( val === '*'){
              let num1 = stack.pop();
            let num2 = stack.pop();
            res = num2 * num1;
            stack.push(res);}
        else if ( val === '/'){
            let num1 = stack.pop();
            let num2 = stack.pop();
            res = num2 / num1;
            stack.push(Math.trunc(res));}
    }

  return stack.pop()

        }
    }

