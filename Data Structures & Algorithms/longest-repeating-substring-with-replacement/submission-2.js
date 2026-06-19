class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

       let map = new Map();
       let left = 0, maxCount = 0, result = 0;


       for(let right = 0; right < s.length; right++){
       map.set(s[right], (map.get(s[right]) || 0 ) + 1) 
       maxCount = Math.max(map.get(s[right]), maxCount)

       if( (right - left + 1 ) - maxCount > k ){
            map.set(s[left], map.get(s[left]) - 1 )
            left++;
       }

            result = Math.max(result, right - left + 1 )
       }
return result
       
    }
}
