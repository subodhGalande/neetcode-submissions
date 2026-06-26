class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack = []

        for(let rock of asteroids){
         let alive = true

         while(alive && rock < 0 && stack.length && stack[stack.length - 1] > 0){
            const top  = stack[stack.length - 1]

            if(Math.abs(rock) > top){
                stack.pop()
            } else if (Math.abs(rock) === top){
                stack.pop()
                alive = false;
            } else {
                alive = false
            }
         } 

         if(alive) stack.push(rock)
        }
    return stack

    }
}
