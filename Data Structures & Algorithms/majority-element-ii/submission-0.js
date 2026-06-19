class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {

    let map = new Map()
    let res = []

    for(let val of nums){
        map.set(val, (map.get(val) || 0) + 1)
    }

    for(let [key, val] of map){
        if(val > nums.length / 3){
            res.push(key)
        }
    }
      return res
    }
}
