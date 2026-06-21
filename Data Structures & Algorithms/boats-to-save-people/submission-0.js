class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {

        let l = 0
        let r = people.length - 1
        people.sort((a,b) => a - b )
        let res = 0


        while(l <= r){
         
         if(people[l] + people[r] <= limit){
            l++
         } 
         r--
         res++
        }
return res
    }
}

