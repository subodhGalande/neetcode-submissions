class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }

        let countS = {}
        let countT = {}
 
       for(let val of s){
        countS[val] = (countS[val] || 0 ) + 1;
       }
       for(let val of t){
        countT[val] = (countT[val] || 0 ) + 1;
       }

       for(let key in countS){
        if(!(key in countT)){
            return false;
        }

        if(countS[key] !== countT[key] ){
            return false
        }
       }

       return true
        
    }
}
