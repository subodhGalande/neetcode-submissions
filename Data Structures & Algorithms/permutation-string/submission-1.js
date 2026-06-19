class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        let s1Freq = new Array(26).fill(0);
        let s2Freq = new Array(26).fill(0);
        let aCode = 'a'.charCodeAt(0);

        // Fill frequency for s1 and first window of s2
        for (let i = 0; i < s1.length; i++) {
            s1Freq[s1.charCodeAt(i) - aCode]++;
            s2Freq[s2.charCodeAt(i) - aCode]++;
        }

        // Helper function to compare frequency arrays
        const isEqual = (arr1, arr2) => {
            for (let i = 0; i < 26; i++) {
                if (arr1[i] !== arr2[i]) return false;
            }
            return true;
        };

        // Sliding window over s2
        for (let i = s1.length; i < s2.length; i++) {
            if (isEqual(s1Freq, s2Freq)) return true;

            // Slide window: remove left char and add right char
            s2Freq[s2.charCodeAt(i) - aCode]++;
            s2Freq[s2.charCodeAt(i - s1.length) - aCode]--;
        }

        // Final check after loop ends
        return isEqual(s1Freq, s2Freq);
    }
}
