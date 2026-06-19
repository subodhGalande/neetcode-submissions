class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {

      let l = 0
      nums1.splice(m)

      while(l < nums2.length){
        nums1.push(nums2[l])
        l++
      }
      
      nums1.sort((a,b) => a - b ).slice(n, 0)

return l
    }
}
