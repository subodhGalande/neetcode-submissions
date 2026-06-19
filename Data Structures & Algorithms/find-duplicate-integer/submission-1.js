class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let counter = {}

        for(let val of nums){
            counter[val] = (counter[val] || 0) + 1;
        }

        for(let val in counter){
          if(counter[val] > 1  ){
            return val
          }
        }
    }
}
