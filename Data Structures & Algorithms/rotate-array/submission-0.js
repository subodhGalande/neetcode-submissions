class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {


    for(let i = 0; i < k; i++){

        let element = nums.pop()
        nums.unshift(element)
    }
 return nums
    }
}
