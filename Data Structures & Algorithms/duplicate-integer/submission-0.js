class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const newSet = new Set(nums)
        if(nums.length > newSet.size){
            return true
        } else {
            return false
        }

   
    }
}
