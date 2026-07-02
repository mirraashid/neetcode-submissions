class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const countObj = {};
        let isDuplicate = false;

        nums.forEach(num => {
            if(countObj[num]){
                isDuplicate =  true;
            } else {
                countObj[num] = true;
            }
        });

        return isDuplicate;
    }
}
