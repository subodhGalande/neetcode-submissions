class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
let numSet = new Set(nums)

let longest = 0;

for(let val of numSet){
    if(!numSet.has(val - 1)){
        let length = 1;
        while(numSet.has(val + length)){
            length++;
        }

        longest = Math.max(longest, length)
      
    }

}
return  longest;
}
}
