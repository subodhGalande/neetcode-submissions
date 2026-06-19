class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
    
    let write = 0

    for (let num of nums){
        if(num !== val){
            nums[write] = num
            write++
        }
    }
 return write
      }
}
