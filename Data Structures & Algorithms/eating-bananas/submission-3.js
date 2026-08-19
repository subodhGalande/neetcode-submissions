class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        let low = 1
        let high = Math.max(...piles)
        let result = high

        while(low <= high){
            let mid = low + Math.floor((high - low) / 2)
              let totalHours = this.reqTime(piles, mid)
            if(totalHours <= h){
                result = mid
                high = mid - 1
            } else {
                low = mid + 1
            }
        }
      return result
     
    }

    reqTime(arr, hourly){
      let  totalHours = 0
        for(let i = 0; i < arr.length; i++){
            totalHours += Math.ceil(arr[i]/ hourly)
        }
        return totalHours
    }
}
