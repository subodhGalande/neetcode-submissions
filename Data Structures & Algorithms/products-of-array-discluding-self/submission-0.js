class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

const n = nums.length;
const res = new Array(n).fill(1)

let left = 1;
for(let i = 0; i < nums.length; i++){

    res[i] = left;
    left *= nums[i]
    
}

let right = 1;
for(let i = nums.length - 1; i >=0; i--){
   res[i] *= right;
   right *= nums[i]
}

return res



    }
}
