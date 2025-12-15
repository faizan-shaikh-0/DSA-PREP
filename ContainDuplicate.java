    //CONTAIN DUPLICATE 

import java.util.HashSet;
import java.util.Set;

    class ContainDuplicate {
    public boolean hasDuplicate(int[] nums) {
        
       Set<Integer> set = new HashSet<>();
        for(int i=0;i<nums.length;i++){
            if(set.contains(nums[i])){
                return true;
            }
            set.add(nums[i]);
        } 
        return false;
    }

    public static void main(String[]args){
       ContainDuplicate p1= new ContainDuplicate();
         int[] arr = {1, 2, 3, 2}; 
         boolean value=p1.hasDuplicate(arr);
         System.out.println(value);
    }
}

