/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let left = 1
        let right = n

        while(true){
            let mid = left + Math.floor((right - left)/2)
            let pick = guess(mid)

            if(pick > 0){
                left = mid + 1
            } else if(pick < 0){
                right = mid - 1
            } else {
                return mid
            }
        }
    }
}
