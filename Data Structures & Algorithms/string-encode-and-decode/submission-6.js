class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
       if(!strs.length) return [];
       return strs.map(s => s.length + "#" + s ).join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(!str.length) return [];
        
        let res = []
        let i = 0

        while( i < str.length ){
            let j = i;

            while(str[j] !== "#" ){
                j++;
            }
             
            let len = parseInt(str.slice(i,j)) 
            let contentStart = j + 1;
            let content = str.slice(contentStart, contentStart + len)
            res.push(content)

            i = contentStart + len



        }
       return res
    }
    
}
