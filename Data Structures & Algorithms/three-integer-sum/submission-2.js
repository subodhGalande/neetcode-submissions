class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b)
        const res = []
        const n = nums.length

        for(let i = 0; i < n; i++){
  if(nums[i] > 0) break
  if(i > 0 && nums[i] === nums[i - 1]) continue

            let l = i + 1
            let r = n - 1

            while(l < r){
                let sum = nums[l] + nums[r] + nums[i]

                if(sum < 0){
                    l++
                } else if(sum > 0){
                    r--
                } else {
                    res.push([nums[i], nums[r], nums[l]])
                    l++
                    r--
                    while(l < r && nums[l] === nums[l - 1]) l++
                    while(l < r && nums[r] === nums[r + 1]) r--
                }
            }
        }

        return res
    }
}
