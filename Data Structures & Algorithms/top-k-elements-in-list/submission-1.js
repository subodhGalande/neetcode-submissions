class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

      let map = {}
      const freq = Array.from({length: nums.length + 1}, () => [])
    

      for(let val of nums){
        map[val] = (map[val] || 0) + 1;
      }

      for(let n in map){
          freq[map[n]].push(parseInt(n))
      }
console.log(freq)
      const res = []

      for(let i = freq.length - 1; i > 0; i--){
        for(const n of freq[i]){
            res.push(n);
            if(res.length === k){
                return res
            }
        }
      }
    
      
  
      
     

    }
}
