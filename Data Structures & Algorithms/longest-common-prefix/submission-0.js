class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let sorted = strs.sort();
        let res = "";

        let f = sorted[0]
        let l = sorted[sorted.length - 1]


        for (let i = 0; i < f.length ; i++){
            if(f[i] === l[i]){
                res += f[i]
            } else {
                return res
            }
        }
       
return res
    }
}
