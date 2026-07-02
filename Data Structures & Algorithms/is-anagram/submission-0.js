class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(str1, str2) {
        if (str1.length !== str2.length) return false;

        const charCount1 = {};
        const charCount2 = {};

        for (let char of str1) {
            charCount1[char] = ++charCount1[char] || 1;
        }

        for (let char of str2) {
            charCount2[char] = ++charCount2[char] || 1;
        }

        for (let char in charCount1) {
            if (charCount1[char] !== charCount2[char]) return false;
        }

        return true;
    }
}
