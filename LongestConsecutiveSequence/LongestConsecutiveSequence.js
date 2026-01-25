
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        //step1 :-> create  hash set  for  duplicate and check  value is exist 
        //step2-> loop for check condition for   numi==consecutive number+1  and add into hashset
        // step 4-> if yes than  add this into   consecutive count and i++
        //step4 else 
            const  consSet= new Set();
        for(let n of nums){
            
        }
        console.log(nums)
    }
}

const obj=new Solution();
obj.longestConsecutive([2,20,4,10,3,4,5]);
