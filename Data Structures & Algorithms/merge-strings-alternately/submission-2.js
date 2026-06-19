class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {

     let res = ""

        let l = 0
        

while(l < word1.length && l < word2.length)    {
    res += word1[l]
    res += word2[l]
l++
}
   
   while(word2.length > l){
    res += word2[l]
    l++
   }

   while(word1.length > l){
    res += word1[l]
    l++
   }
      
return res

    }
}
