class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums){


         let map = new Map()
         
         for(let val of nums){
            map.set(val, (map.get(val) || 0 ) + 1 )
         }

         for(let [key, val] of map){
            if(val > nums.length / 2){
                return key
            }
         }
    
    
    }
}
